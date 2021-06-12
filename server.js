const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greeting/:name', (req, res) =>{
  res.send(`<h1>greetings ${req.params.name}</h1>`)
})

app.listen(PORT, () => {
  console.log("listening on port ", PORT)
})
