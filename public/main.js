// const express = require('express')
// const app = express()
// app.use(express.static('public'))
// const bodyParser= require('body-parser')
// app.use(bodyParser.json())
// app.set('view engine', 'ejs')
// const MongoClient = require('mongodb').MongoClient

var update = document.getElementById('update')

update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
})


fetch('quotes', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'name': 'Darth Vader',
    'quote': 'I find your lack of faith disturbing.'
  })
}).then(res => {
  if (res.ok) return res.json()
})
.then(data => {
  console.log(data)
})



