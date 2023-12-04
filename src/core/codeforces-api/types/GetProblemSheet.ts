type GetProblemSheetRes = {
    meta: {
        handle: string;
        minProblemRating: number;
        maxProblemRating: number;
        numberOfPreviousContests: number;
    };
    problems: {
        contestId: number;
        index: string;
        name: string;
        type: string;
        points: number;
        rating: number;
        tags: string[];
        verdict: SubmissionVerdict;
        URL: string;
    }[];
};

export enum SubmissionVerdict {
    failed = "FAILED",
    ok = "OK",
    partial = "PARTIAL",
    compilationError = "COMPILATION_ERROR",
    runtimeError = "RUNTIME_ERROR",
    wrongAnswer = "WRONG_ANSWER",
    presentationError = "PRESENTATION_ERROR",
    timeLimitExceeded = "TIME_LIMIT_EXCEEDED",
    memoryLimitExceeded = "MEMORY_LIMIT_EXCEEDED",
    idlenessLimitExceeded = "IDLENESS_LIMIT_EXCEEDED",
    securityViolated = "SECURITY_VIOLATED",
    crashed = "CRASHED",
    inputPreparationCrashed = "INPUT_PREPARATION_CRASHED",
    skipped = "SKIPPED",
    testing = "TESTING",
    rejected = "REJECTED",
    none = "NONE",
}
export default GetProblemSheetRes;
