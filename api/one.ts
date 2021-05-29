import { VercelRequest, VercelResponse } from "@vercel/node";
const fetch = require("node-fetch")

export default function one(req: VercelRequest, res: VercelResponse) {
    fetch("https://website-with-api.vercel.app/api/one").then((data) => {
        const resp = data.json()
        return resp
    })
        .then((resp) => {
            res.json(resp)
        })
        .catch(e => console.log(e)
        )
}