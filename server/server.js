const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const routes = require('./routes/api');
const routes = require('./api/routes/wePostRoutes');
const port = process.env.port || 4000;

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/wepost');
mongoose.Promise = global.Promise;

app.use('/uploads',express.static('uploads'));
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json()) Since Express 4.16+ the body parsing functionality has become builtin with express

// middleware to initialise routes
app.use('/api', routes);

// error handling middleware
app.use(function(err, req, res, next){
  // console.log(err);
  res.status(422).send({error: err.message})
})

//listen for request
app.listen(port, function(){
  console.log(`Server started on port ${port}`);
});