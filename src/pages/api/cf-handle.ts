import CodeforcesAPI from "@/core/codeforces-api/CodeforcesAPI";
import { NextApiRequest, NextApiResponse } from "next";
import corsMiddleware from "@/cors-middleware"; 
const getCfHandle = async (req: NextApiRequest, res: NextApiResponse) => {
    await new Promise<void>((resolve, reject) => {
        corsMiddleware(req, res, (err: any) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });

    const { handle } = req.query;
    if (!handle) {
        return res.status(400).json({ error: "Bad Request: handle is required" });
    }
    try {
        let response = await CodeforcesAPI.userDetails(handle as string);
        return res.status(200).json({ data: response });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default getCfHandle;
