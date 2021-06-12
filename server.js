const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greeting/:name', (req, res) =>{
  res.send(`<h1>greetings ${req.params.name}</h1>`)
})

app.get('/tip/:total/:tipPercentage', (req,res) => {
  res.send(`<h1>${req.params.total*(req.params.tipPercentage/100)}</h1>`)
})
app.listen(PORT, () => {
  console.log("listening on port ", PORT)
})
