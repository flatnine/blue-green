const express = require('express')
const app = express()
const port = 3000


let VERSION = process.env.VERSION 

app.get('/', (req, res) => {
  res.send('Hello, This is version: ' + VERSION)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
