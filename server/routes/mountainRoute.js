"use strict";

const express = require('express');
const router = express.Router();
const mountainController = require('../controllers/mountainController');


router.route('/')
  .get(mountainController.get_mountains);


module.exports = router;