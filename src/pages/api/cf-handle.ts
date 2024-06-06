import CodeforcesAPI from "@/core/codeforces-api/CodeforcesAPI";
import { NextApiRequest, NextApiResponse } from "next";

const getCfHandle = async (req: NextApiRequest, res: NextApiResponse) => {
    const { handle } = req.query;
    if (!handle) {
        return res.status(400).json({ error: "Bad Request: handle is required" });
    }
    let response = await CodeforcesAPI.userDetails(handle as string);
    return res.status(200).json({data : response});
};
export default getCfHandle;