const express = require('express');

const app = express()

const hostname = 'localhost'
const port = 8017


app.get('/', (req, res) => {
  res.send('<h1>Hello World, i`m hoangthe</h1> ')
})

app.listen(port, hostname, () => {
  console.log(`hello, i'm running server at http://${hostname}:${port}`)
})