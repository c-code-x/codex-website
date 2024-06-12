type GetAllProblemsRes = {
    status: string;
    result: Data;
};

type Data = {
    problems: Problem[];
    problemStatistics: ProblemStatistic[];
};

export type Problem = {
    contestId: number;
    index: string;
    name: string;
    type: string;
    points?: number;
    rating?: number;
    tags: string[];
};

type ProblemStatistic = {
    contestId: number;
    index: string;
    solvedCount: number;
};

export default GetAllProblemsRes;
