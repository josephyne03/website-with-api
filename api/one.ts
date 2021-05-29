import { VercelRequest, VercelResponse } from "@vercel/node";

export default function one(req: VercelRequest, res: VercelResponse) {
    // fetch()
    res.json({ hi: "hello" })
}