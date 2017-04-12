const express = require('express')
const bodyParser= require('body-parser')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const MongoClient = require('mongodb').MongoClient


app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
	db.collection('quotes').find().toArray(function(err, result) {
		if (err) return console.log(err)
	    res.render('index.ejs', {quotes: result})
	})
})

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log('saved to database')
		res.redirect('/')
	})
})

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Priyanka Saigal'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({name: req.body.name},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send('A darth vadar quote got deleted')
  })
})


MongoClient.connect('mongodb://psaigal:password123!@ds159220.mlab.com:59220/quote-project', (err, database) => {
	if (err) return console.log(err)
	db = database
	app.listen(3000, () => {
	console.log('listening on 3000')
	})
})



