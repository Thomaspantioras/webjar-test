const Author = require('../models/authors');

exports.registerAuthor = (req,res,next) => {
    Author.create(req.body).then( (author) => {
      res.send(author);
    }).catch(next);
}

exports.getAllArticles = (req, res, next) => {
  Author.find({}).then(authors => {
    var articles = []
    authors.map(
      author => author.articles.map(
        article => articles.push(article)
      )
    );
    res.send(articles)
  }).catch(next);
}