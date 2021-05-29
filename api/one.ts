import { VercelRequest, VercelResponse } from "@vercel/node";
const fetch = require("node-fetch")
const os = require("os")

export default function one(req: VercelRequest, res: VercelResponse) {
    function mySlowFunction(baseNumber) {
        console.time('mySlowFunction');
        let result = 0;
        for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
            result += Math.atan(i) * Math.tan(i);
        };
        console.timeEnd('mySlowFunction');
    }

    mySlowFunction(10); // higher number => more iterations => slower
    res.json({
        success: true,
        freemem: os.freemem(),
        totalmem: os.totalmem(),
        uptime: os.uptime(),
        release: os.release(),
        platform: os.platform(),
    })
}