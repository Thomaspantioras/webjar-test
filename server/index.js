const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

// set up express app
const app = express();

app.use(bodyParser.json())
// app.use(express.json()) Since Express 4.16+ the body parsing functionality has become builtin with express

// middleware to initialise routes
app.use('/api', routes);


//listen for request
app.listen(process.env.port || 4000, function(){
  console.log("listening for requests")
});