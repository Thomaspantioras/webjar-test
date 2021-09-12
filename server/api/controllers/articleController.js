// const multer = require('multer');
// const upload = multer({dest: '/uploads/'});
const Article = require('../models/articles');

exports.createArticle = (req,res,next) => {
  console.log("req.file2: ", req.file)
  req.body.article_image = req.file.path;
  console.log("req.body2: ", req.body)
    Article.create(req.body).then( (article) => {
      res.send(article);
    }).catch(next);
}

exports.getAllArticlesSortedByDate = (req, res, next) => {
  console.log("req.file: ", req.query.page)
  Article.find().sort({date: -1}).skip(Number(req.query.page)).limit(10).then(articles => res.send(articles)).catch(next);
}

exports.getArticlesByAuthorId = (req, res, next) => {
  console.log("hi",req.params.id)
  Article.find({author_id: req.params.id}).then(articles => res.send(articles)).catch(next);
}
