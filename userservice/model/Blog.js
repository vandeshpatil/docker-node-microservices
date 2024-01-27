const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const blogSchema = new Schema({
  title: {type:String,required:true},
  slug: String,
  published: Boolean,
 });

const Blog = model('Blog', blogSchema);
module.exports = Blog;