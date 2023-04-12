const express = require('express')
const {getRandomJoke, getDadJoke} = require("@sathnindu/joke-sdk");
const app = express()
const port = 4001
app.get('/', async (req, res) => {
    let random_joke = await getRandomJoke();
    let dad_jokes = await getDadJoke();

    console.log({random_joke, dad_jokes});
    res.send({random_joke, dad_jokes})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})