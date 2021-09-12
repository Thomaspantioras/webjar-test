const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Author = require('./authors');

const Photo = new Schema({
  photoPath: {type: String},
  photo: Buffer
});

// create an article Schema
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  description: {
    type: String,
    required: [true,'Description field is required']
  },
  date: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  author_id: {
    type: String,
    required: [true,'author_id field is required']
  },
  author_full_name: {
    type: String,
    required: [true,'author_full_name field is required']
  },
  article_image: { 
    type: String 
  }
  // photo: Photo,
  // author: { type: Schema.Types.ObjectId, ref: 'author' }
});

// // create author schema and model
// const AuthorSchema = new Schema({
//   name: {
//     type: String,
//     required: [true,'Name field is required']
//   },
//   surname: {
//     type: String,
//     required: [true,'Surname field is required']
//   },
//   email: {
//     type: String,
//     required: [true,'Email field is required']
//   },
//   password: {
//     type: String,
//     required: [true,'Password field is required']
//   },
//   articles: [ArticleSchema]
// });

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;