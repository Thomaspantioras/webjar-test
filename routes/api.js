const express = require('express');
const router = express.Router();


// get a list of authors from the database
router.get("/authors", (req, res, next) => {
  res.send({type: "GET"}); // an object indicates what type of request has been made
});


// register a new author
router.post("/authors", (req, res, next) => {
  res.send({type: "POST"});
});

// update author
router.put("/authors/:id", function(req, res, next){
  res.send({type: "PUT"});
});

// delete an author from the database
router.delete("/authors/:id", function(req, res, next){
  res.send({type: "DELETE"});
});


module.exports = router;