const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app lsitening on port ${port}`)
})

app.get('/launchx', (req, res) => {
  res.send('Bienvenidos launch X')  
})