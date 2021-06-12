const express = require('express');
const app = express();
const PORT = 3000;
const wisdom = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get('/greeting/:name', (req, res) =>{
  res.send(`<h1>greetings ${req.params.name}</h1>`)
})

app.get('/tip/:total/:tipPercentage', (req,res) => {
  res.send(`<h1>${req.params.total*(req.params.tipPercentage/100)}</h1>`)
})

app.get('/magic/:question', (req,res) => {
  res.send(`<header>${req.params.question}</header><h1>${wisdom[Math.floor(Math.random()*wisdom.length)]}</h1>`)
})

app.listen(PORT, () => {
  console.log("listening on port ", PORT)
})
