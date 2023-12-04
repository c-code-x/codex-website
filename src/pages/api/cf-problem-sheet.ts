import CodeforcesAPI from "@/core/codeforces-api/CodeforcesAPI";
import { NextApiRequest, NextApiResponse } from "next";

const getCodeforcesProblemSheet = async (req: NextApiRequest, res: NextApiResponse) => {
    const { handle, minProblemRating, maxProblemRating, numberOfPreviousContests } = req.query;
    // Check if handle is present
    if (!handle) {
        return res.status(400).json({ error: "Bad Request: handle is required" });
    }
    console.log(
        `handle: ${handle} minProblemRating: ${minProblemRating} maxProblemRating: ${maxProblemRating} numberOfPreviousContests: ${numberOfPreviousContests}`
    );
    let response = await CodeforcesAPI.getProblemSheet(
        handle as string,
        Number(minProblemRating || 0),
        Number(maxProblemRating || 10_000),
        Number(numberOfPreviousContests || 50)
    );
    return res.status(200).json(response);
};
export default getCodeforcesProblemSheet;
