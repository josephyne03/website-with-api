export default function script(req, res) {
    const fetch = require("node-fetch")
    let i = 0;
    while (i < 50) {
        fetch("https://website-with-api.vercel.app/api/one")
            .then(data => data.json())
            .then(res => console.log(res))
            .catch(e => console.log(e))

        i++
        console.log(i);
    }
    res.send({ success: true })
}