const axios = require('axios');

const url  = "https://official-joke-api.appspot.com/random_joke";

/**
 * Sending a get request for a joke
 */
module.exports.getJoke = async () => {
    const res = await axios.get(url);
    console.log(res.data);
    const setup = res.data.setup;
    const punchline = res.data.punchline;
    return {setup, punchline};
}