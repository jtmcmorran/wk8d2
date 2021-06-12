const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
  res.send('<h1> 99 bottles of beer on the wall</h1><a href = "/98">take one down, pass it around</a>')
})
app.get('/:number_of_bottles', (req,res) => {
  const bottles = parseInt(req.params.number_of_bottles);
  if( bottles === 0){
    res.send('<h1>no more bottles of beer on the wall</h1> <a href = "/">start over</a>')
  }
  else{
    res.send(`<h1> ${bottles} bottles of beer on the wall</h1><a href="/${bottles-1}">take one down pass it around</a>`)
  }
})

app.listen(PORT, () => {
  console.log("listening on port ", PORT)
})
