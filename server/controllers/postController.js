'use strict';

const postModel = require('../models/postModel');


const create_post = async (req, res) => {

  const post = req.body;

  console.log('post.filename: ', post.filename);
  console.log('post.jimage: ', post.jimage);

  const id = await postModel.createPost(post, res);

  res.json({ message: `Post created with id: ${id}`});
}


module.exports = {
  create_post,
};