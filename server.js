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
app.use(bodyParser.urlencoded({ extended:true}));

app.listen(4000, function() {
    console.log("listening on port 4000");
})

//establish connection
//uname: root, pwd: yodafoundation
var connectionString = 'mongodb+srv://root:yodafoundation@cluster0.cldb8.mongodb.net/test?retryWrites=true&w=majority';

/* 
MongoClient.connect(connectionString, {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to database')
})
*/

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')

    //CRUD Methods----------------------------------------------------------------
    //GET request
    app.get('/', (req, res) => {
        //res.send("Hello World")
        res.sendFile(__dirname + "/index.html")
    })

    //POST request
    app.post('/quotes', (req,res) => {
        console.log(req.body);
        //res.send("post received")
    })


  })




//start with nodemon server.js