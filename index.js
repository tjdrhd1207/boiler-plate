const express = require('express')
const app = express()
const port = 5000

const URI = 'mongodb+srv://jmkim:<password>@boilerplate.7vedf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const mongoose = require('mongoose')
mongoose.connect(URI)
        .then(()=>console.log('MongoDB Connected...'))
        .catch((e) => console.log('MongoDB error: ', e));

app.get('/', (req, res) => {
  res.send('Hello World! nodeJs의 세계에 오신 것을 환영합니다.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})