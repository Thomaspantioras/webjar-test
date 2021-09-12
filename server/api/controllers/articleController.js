const Article = require('../models/articles');

exports.createArticle = (req,res,next) => {
    Article.create(req.body).then( (article) => {
      res.send(article);
    }).catch(next);
}

exports.getAllArticlesSortedByDate = (req, res, next) => {
  Article.find().sort({date: -1}).skip(10).limit(10).then(articles => res.send(articles)).catch(next);
}

exports.getArticlesByAuthorId = (req, res, next) => {
  console.log("hi",req.params.id)
  Article.find({author_id: req.params.id}).then(articles => res.send(articles)).catch(next);
}
