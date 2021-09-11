const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Article = require('./articles');

// // create an article Schema
// const ArticleSchema = new Schema({
//   title: {
//     type: String,
//     required: [true,'Title field is required']
//   },
//   description: {
//     type: String,
//     required: [true,'Description field is required']
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   views: {
//     type: Number,
//     default: 0
//   }
// });

// create author schema and model
const AuthorSchema = new Schema({
  name: {
    type: String,
    required: [true,'Name field is required']
  },
  surname: {
    type: String,
    required: [true,'Surname field is required']
  },
  email: {
    type: String,
    required: [true,'Email field is required']
  },
  password: {
    type: String,
    required: [true,'Password field is required']
  },
  // articles: [ArticleSchema]
  articles: [{ type: Schema.Types.ObjectId, ref: 'article' }]
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;