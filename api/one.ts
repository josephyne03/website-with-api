import { VercelRequest, VercelResponse } from "@vercel/node";

export default function one(req: VercelRequest, res: VercelResponse) {
    res.send("hello")
}