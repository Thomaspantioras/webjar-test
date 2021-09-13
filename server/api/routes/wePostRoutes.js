const express = require('express');
const bcrypt = require('bcrypt');
const Author = require('../models/authors');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  },
})
// const upload = multer({dest: 'uploads/'});
const upload = multer({storage: storage});

const authorController = require("../controllers/authorController");
const articleController = require("../controllers/articleController");

router.get('/', (req, res) => {
  res.send('Hello, World!');
});
router.get('/articles', (req, res, next) => {
  articleController.getAllArticlesSortedByDate(req, res, next)
});
router.post('/articles', upload.single('article_image'), (req, res, next) => {
  articleController.createArticle(req, res, next)
});

router.get("/articles/:id", (req, res, next) => {
  articleController.getArticlesByAuthorId(req, res, next);
});

// update the article views
router.put("/articles/:id", (req, res, next) => {
  articleController.updateArticleViews(req, res, next);
});

// router.get('/articles', (req, res, next) => {
//   authorController.getAllArticles(req, res, next)
// });


// // get a list of authors from the database
// router.get("/authors", (req, res, next) => {
  
//   res.send({type: "GET"}); // an object indicates what type of request has been made
// });


// register a new author
router.post("/authors", (req, res, next) => {
  authorController.registerAuthor(req, res, next);
});

router.post("/authors/login", (req, res, next) => {
  authorController.loginAuthor(req, res, next);
});


// // update author
// router.put("/authors/:id", function(req, res, next){
//   res.send({type: "PUT"});
// });

// // delete an author from the database
// router.delete("/authors/:id", function(req, res, next){
//   res.send({type: "DELETE"});
// });


module.exports = router;