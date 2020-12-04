const axios = require('axios');

const url  = "https://official-joke-api.appspot.com/random_joke";

/**
 * Sending a get request for a joke
 */
module.exports.getJoke = async () => {
    try {
        const res = await axios.get(url);
        console.log(res.data);
        const setup = res.data.setup;
        const punchline = res.data.punchline;
        return {setup, punchline};
    } catch (e) {
        console.log("Failed to get new joke!");
        return {setup: "faild to retrive new joke", punchline: "failed to retrive new joke"};
    }
}