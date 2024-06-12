import { Problem } from "./GetAllProblemsRes";

type GetUserSubmissionsRes = {
    status: string;
    result: UserSubmission[];
};

export type UserSubmission = {
    id: number;
    contestId: number;
    creationTimeSeconds: number;
    relativeTimeSeconds: number;
    problem: Problem;
    author: Author;
    programmingLanguage: string;
    verdict: string;
    testset: string;
    passedTestCount: number;
    timeConsumedMillis: number;
    memoryConsumedBytes: number;
};

export type Author = {
    contestId: number;
    members: Member[];
    participantType: string;
    ghost: boolean;
    room?: number;
    startTimeSeconds?: number;
    teamId?: number;
    teamName?: string;
};

export type Member = {
    handle: string;
};

export default GetUserSubmissionsRes;
