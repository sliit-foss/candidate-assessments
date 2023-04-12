const axios = require('axios');

const randomJokeApiUrl = 'https://official-joke-api.appspot.com/random_joke';
const dadJokeApiUrl = 'https://icanhazdadjoke.com/';

async function getRandomJoke() {
    try {
        const response = await axios.get(randomJokeApiUrl);
        const {setup, punchline} = response.data;
        return `${setup} ${punchline}`;
    } catch (error) {
        console.error(error);
        return 'Error getting joke.';
    }
}

async function getDadJoke() {
    try {
        const response = await axios.get(dadJokeApiUrl, {
            headers: {
                Accept: 'application/json',
            },
        });
        return response.data.joke;
    } catch (error) {
        console.error(error);
        return 'Error getting joke.';
    }
}

module.exports = {getRandomJoke, getDadJoke};
