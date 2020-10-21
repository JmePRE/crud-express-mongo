//Imports
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();
const mongodb = require('mongodb').MongoClient;

//body-parser
//tells body-parser to extract data from the <form> element and add them to the 
//body property (req.body) in the request object.
//in object form { name: '', quote: '' }
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())


app.listen(4000, function() {
    console.log("listening on port 4000");
})

//establish connection
//uname: root, pwd: yodafoundation
var connectionString = 'mongodb+srv://root:yodafoundation@cluster0.cldb8.mongodb.net/star-wars-quotes?retryWrites=true&w=majority';

/* 
MongoClient.connect(connectionString, {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to database')
})
*/
MongoClient.connect(connectionString, { useUnifiedTopology: true })
	.then(client => {
		console.log('Connected to Database');
		const db = client.db('star-wars-quotes');
		//specify collection
		const quotesCollection = db.collection('quotes');

    

    //CRUD Methods----------------------------------------------------------------
    app.set('view engine', 'ejs');
    //GET request
    app.get('/', (req, res, next) => {
        //res.send("Hello World")
        //for static files: res.sendFile(__dirname + "/index.html");
       // const cursor = 
		db.collection('quotes').find().toArray()
		//sends in results as 'quotes'
            .then(results => { res.render("index.ejs",{ quotes: results });})
            .catch(error => console.error(error))
       
        
    })
    

    //POST request
    app.post('/quotes', (req,res) => {
        //console.log(req.body);
        //res.send("post received")

        //insert quotes into collection
        quotesCollection.insertOne(req.body)
            .then(result => {
				res.redirect("/");
            })
            .catch(error => console.error(error));
	}) 
	
	app.put('/quotes', (req, res) => {
		console.log(req.body)
	  })
	  



  })
  .catch(error => console.error(error));

  



//start with nodemon server.js