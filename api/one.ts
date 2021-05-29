import { VercelRequest, VercelResponse } from "@vercel/node";

export default function one(req: VercelRequest, res: VercelResponse) {
    fetch("https://website-with-api.vercel.app/api/one").then(() => {
        res.json({ hi: "hello" })
    })
}