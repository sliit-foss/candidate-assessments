# Joke-SDK
A simple API wrapper that pulls random jokes from 

> Author: 5.H.4.D.0.W

 - https://official-joke-api.appspot.com/random_joke 
 ```json
 {
	 "type":"general",
	 "setup":"What's black and white and read all over?",
	 "punchline":"The newspaper.",
	 "id":269
}
 ```
 - https://icanhazdadjoke.com/
 ```json
 {
	 "id":"mrHQKBA5MCd",
	 "joke":"My boss told me that he was going to fire the person with the worst posture. I have a hunch, it might be me.",
	 "status":200
 }
 ```


## Example
 
 ```js
 const jokeAPI = require('joke-sdk');

 jokeAPI.getRandomJoke()
 	.then(j => console.log(`Random Joke : \n${j.setup}\n${j.punchline}`))
	.catch(e => console.error(e));

 jokeAPI.getRandomDadJoke()
	.then(dj => console.log(`\nRandom Dad Joke : \n${dj.joke}`))
	.catch(e => console.error(e));

 ```
