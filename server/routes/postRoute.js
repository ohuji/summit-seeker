'use strict';

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

const multer = require('multer');
const upload = multer({ destination: './uploads/'});

router.route('/')
  .post(upload.single('jimage'), postController.create_post)

module.exports = router;