import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
const cors = Cors({
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"],
    origin: "*", 
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function): Promise<void> {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: unknown) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve();
        });
    });
}

export default async function corsMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    next: Function
): Promise<void> {
    await runMiddleware(req, res, cors);
    next();
}
