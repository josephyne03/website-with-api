const fetch = require("node-fetch")
let i = 0;
while (i < 2000) {
    fetch("https://website-with-api.vercel.app/api/script")
        .then(data => data.json())
        .then(res => console.log(res))
        .catch(e => console.log(e))

    i++
    console.log(i);
}