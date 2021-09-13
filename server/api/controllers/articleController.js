// const multer = require('multer');
// const upload = multer({dest: '/uploads/'});
const Article = require('../models/articles');

exports.createArticle = (req,res,next) => {
  req.body.article_image = req.file.path;
    Article.create(req.body).then( (article) => {
      res.send(article);
    }).catch(next);
}

exports.getAllArticlesSortedByDate = (req, res, next) => {
  Article.find().sort({date: -1}).skip(Number(req.query.page) * 10).limit(10).then(articles => res.send(articles)).catch(next);
}

exports.getArticlesByAuthorId = (req, res, next) => {
  Article.find({author_id: req.params.id}).then(articles => res.send(articles)).catch(next);
}

exports.updateArticleViews = (req, res, next) => {
  Article.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Article.findOne({_id: req.params.id}).then((article) => {
      res.send(article);
    })
  }).catch(next);
}
