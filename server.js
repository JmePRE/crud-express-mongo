//Imports
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//body-parser
//tells body-parser to extract data from the <form> element and add them to the 
//body property (req.body) in the request object.
//in object form { name: '', quote: '' }
app.use(bodyParser.urlencoded({ extended:true}));

app.listen(4000, function() {
    console.log("listening on port 4000");
})

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

//start with nodemon server.js