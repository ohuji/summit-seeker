'use strict';

const postModel = require('../models/postModel');


const create_post = async (req, res) => {

  const post = req.body;
  // post.filename = req.file.filename;
  // console.log('req.body.jimage: ', req.body.jimage);
  console.log('post.filename: ', post.filename);
  console.log('post.jimage: ', post.jimage);

  const id = await postModel.createPost(post, res);

  res.json({ message: `Post created with id: ${id}`});
}


module.exports = {
  create_post,
};