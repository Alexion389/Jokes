const axios = require('axios');
const { getJoke } = require('../src/request/requestHandler');

jest.mock('axios');

test('when getting joke successfully', () => {
    const res = {
        data: {
            "setup": "What do you call a cow on a trampoline?",
            "punchline": "A milk shake!"
        }
    }
    axios.get.mockResolvedValue(res);
    return getJoke().then(data => expect(data).toEqual({setup: "What do you call a cow on a trampoline?", punchline: "A milk shake!"}));
});

// Mock error thrown during api call
test('when fail to get joke', () => {
    axios.get.mockRejectedValueOnce(new Error('Connection failed'));
    return getJoke().then(data => expect(data).toEqual({setup: "faild to retrive new joke", punchline: "failed to retrive new joke"}));
});