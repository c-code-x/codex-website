// codeforcesAPI.ts
import axios, { AxiosResponse } from "axios";
import GetUserSubmissionsRes from "./types/codefoces-api-res/GetUserSubmissionsRes";
import GetAllContestsRes, { Contest } from "./types/codefoces-api-res/GetAllContestsRes";
import GetAllProblemsRes, { Problem } from "./types/codefoces-api-res/GetAllProblemsRes";
import GetProblemSheetRes, { SubmissionVerdict } from "./types/GetProblemSheet";

export default class CodeforcesAPI {
    static API_URL = "https://codeforces.com/api";
    static FINISHED_PHASE = "FINISHED";

    static async getAllContests(): Promise<Contest[]> {
        try {
            const response: AxiosResponse<GetAllContestsRes> = await axios.get(
                `${this.API_URL}/contest.list`
            );
            return response.data.result;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getAllPastContests(numberOfContests: number): Promise<Contest[]> {
        const contests = await this.getAllContests();
        return contests
            .filter((contest) => contest.phase === this.FINISHED_PHASE)
            .sort((a, b) => b.id - a.id)
            .slice(0, Math.min(numberOfContests, contests.length));
    }

    static async getUserSubmissions(handle: string) {
        try {
            const response: AxiosResponse<GetUserSubmissionsRes> = await axios.get(
                `${this.API_URL}/user.status?handle=${handle}`
            );
            return response.data.result;
        } catch (error) {
            console.error(error);
        }
        return [];
    }

    static async getAllProblems(): Promise<Problem[]> {
        try {
            const response: AxiosResponse<GetAllProblemsRes> = await axios.get(
                `${this.API_URL}/problemset.problems`
            );
            return response.data.result.problems;
        } catch (error) {
            console.error(error);
        }
        return [];
    }

    static async getProblemsForContests(contests: Contest[]): Promise<Problem[]> {
        const contestIds = contests.map((contest) => contest.id);

        return await this.getAllProblems().then((allProblems) => {
            const problems: Problem[] = [];
            allProblems.forEach((problem) => {
                if (contestIds.includes(problem.contestId)) {
                    problems.push(problem);
                }
            });
            return problems;
        });
    }

    static async getProblemsFromPastContestsByRating(
        numberOfContests: number,
        minRating: number,
        maxRating: number
    ) {
        const contests = await this.getAllPastContests(numberOfContests);
        const problems = await this.getProblemsForContests(contests);
        if (minRating > maxRating) throw new Error("minRating must be less than maxRating");
        return problems
            .filter(
                (problem) =>
                    problem.rating !== undefined &&
                    problem.rating >= minRating &&
                    problem.rating <= maxRating
            )
            .sort((a, b) => {
                if (a.rating === undefined || b.rating === undefined) return 0;
                return a.rating - b.rating;
            });
    }

    static async getProblemSheet(
        handle: string,
        minRating: number,
        maxRating: number,
        numberOfPreviousContests: number
    ): Promise<GetProblemSheetRes> {
        const submissions = await this.getUserSubmissions(handle);
        const problemVerdictMap: Map<string, SubmissionVerdict> = new Map();

        submissions.forEach((submission) => {
            const key = `${submission.problem.contestId}${submission.problem.index}`;
            const verdict =
                submission.verdict === undefined
                    ? SubmissionVerdict.none
                    : (submission.verdict as SubmissionVerdict);
            problemVerdictMap.set(key, verdict);
        });

        const problems = await this.getProblemsFromPastContestsByRating(
            numberOfPreviousContests,
            minRating,
            maxRating
        );

        const problemSheet: GetProblemSheetRes = {
            meta: {
                handle,
                minProblemRating: minRating,
                maxProblemRating: maxRating,
                numberOfPreviousContests,
            },
            problems: [],
        };

        const genUrl = (contestId: number, index: string) =>
            `https://codeforces.com/problemset/problem/${contestId}/${index}`;
        for (const problem of problems) {
            const key = `${problem.contestId}${problem.index}`;
            let verdict = problemVerdictMap.get(key) || SubmissionVerdict.none;
            problemSheet.problems.push({
                ...problem,
                points: problem.points || 0,
                rating: problem.rating || 0,
                verdict,
                URL: genUrl(problem.contestId, problem.index),
            });
        }
        return problemSheet;
    }
}
