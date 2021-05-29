import { VercelRequest, VercelResponse } from "@vercel/node";
const fetch = require("node-fetch")
const os = require("os")

export default function one(req: VercelRequest, res: VercelResponse) {
    function fibo(n) {
        console.log(n)
        if (n < 2)
            return 1;
        else return fibo(n - 2) + fibo(n - 1);
    }
    console.log(fibo(20))
    res.json({
        success: true,
        freemem: os.freemem(),
        totalmem: os.totalmem(),
        uptime: os.uptime(),
        release: os.release(),
        platform: os.platform(),
    })
}