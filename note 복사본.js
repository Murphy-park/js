
const express = require('express')
const app = express()

app.get('/kau', (req, res) => {
  res.send('welcome to kau!!')
})

app.listen(3000)