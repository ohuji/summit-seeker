'use strict';

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const multer = require('multer');

// Multer File filter
const fileFilter = (req, file, callback) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif']
  if (allowedMimeTypes.includes(file.mimeType))  {
    callback(null, true);
  } else  {
    callback(null, false);
  }
};

// Location for multer to upload media
const upload = multer({ destination: './uploads/', fileFilter});

//Post routes

router.route('/')
  .post(upload.single('jimage'), postController.create_post)

module.exports = router;