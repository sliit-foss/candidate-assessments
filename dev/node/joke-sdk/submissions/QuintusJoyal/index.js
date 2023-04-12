const jokeAPI = require('joke-sdk');

jokeAPI.getRandomJoke()
	.then(j => console.log(`\nRandom Joke : \n${j.setup}\n${j.punchline}`))
	.catch(e => console.error(e));

jokeAPI.getRandomDadJoke()
   	.then(dj => console.log(`\nRandom Dad Joke : \n${dj.joke}`))
   	.catch(e => console.error(e));
