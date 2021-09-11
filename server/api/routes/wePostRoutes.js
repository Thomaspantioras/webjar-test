const express = require('express');
const Author = require('../models/authors');
const router = express.Router();

const authorController = require("../controllers/authorController");
const articleController = require("../controllers/articleController");

router.get('/', (req, res) => {
  res.send('Hello, World!');
});
router.get('/articles', (req, res, next) => {
  articleController.getAllArticlesSortedByDate(req, res, next)
});
router.post('/articles', (req, res, next) => {
  articleController.createArticle(req, res, next)
});

router.get("/articles/:id", (req, res, next) => {
  articleController.getArticlesByAuthorId(req, res, next);
});

// router.get('/articles', (req, res, next) => {
//   authorController.getAllArticles(req, res, next)
// });
// get a list of authors from the database
router.get("/authors", (req, res, next) => {
  
  res.send({type: "GET"}); // an object indicates what type of request has been made
});


// register a new author
router.post("/authors", (req, res, next) => {
  authorController.registerAuthor(req, res, next);
  // console.log(req.body)
  // var author = new Author(req.body);
  // author.save();
  // Author.create(req.body).then( (author) => {

  //   res.send(author);
  //   // res.send({
  //   //   type: "POST",
  //   //   name: req.body.name,
  //   //   surname: req.body.surname,
  //   //   email: req.body.email,
  //   //   password: req.body.password
  //   // });
  // });
});
// router.post("/registration")

// update author
router.put("/authors/:id", function(req, res, next){
  res.send({type: "PUT"});
});

// delete an author from the database
router.delete("/authors/:id", function(req, res, next){
  res.send({type: "DELETE"});
});


module.exports = router;