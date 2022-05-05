'use strict';

const postModel = require('../models/postModel');


const create_post = async (req, res) => {

  const post = req.body;
  const mID = req.body.mID;

  console.log('post.filename: ', post.filename);
  console.log('post.jimage: ', post.jimage);

  const id = await postModel.createPost(post, mID, res);

  res.json({ message: `Post created with id: ${id}`});
}


module.exports = {
  create_post,
};