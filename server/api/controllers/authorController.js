const bcrypt = require('bcrypt');
const Author = require('../models/authors');

exports.registerAuthor = async (req,res,next) => {
  // hash password
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(req.body.password, salt);
  req.body.password = passwordHash;

  Author.create(req.body).then( (author) => {
    res.send(author);
  }).catch(next);
}

exports.loginAuthor = (req,res,next) => {
  Author.find({email: req.body.email}).then(async author => {
    const validPassword = await bcrypt.compare(req.body.password,author[0].password);
    if(author && validPassword) {
        res.send(author)
    }else {
      console.log("Email or password is incorrect")
    }
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

exports.getArticlesByAuthor = (req, res, next) => {
  // Author.find({}).then(authors => {
  //   var articles = []
  //   authors.map(
  //     author => author.articles.map(
  //       article => articles.push(article)
  //     )
  //   );
  //   res.send(articles)
  // }).catch(next);
}