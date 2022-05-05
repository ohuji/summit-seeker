"use strict";

const express = require('express');
const router = express.Router();
const mountainController = require('../controllers/mountainController');


router.route('/himalayan')
  .get(mountainController.get_himalayan_mountains);

router.route("/europe")
  .get(mountainController.get_european_mountains);

router.route("/africa")
  .get(mountainController.get_african_mountains);

router.route("/centralasia")
  .get(mountainController.get_centralasian_mountains);

router.route("/southeastasia")
  .get(mountainController.get_southeastasian_mountains);

router.route("/australia")
  .get(mountainController.get_australian_mountains);

router.route("/northamerica")
  .get(mountainController.get_northamerican_mountains);

router.route("/southamerica")
  .get(mountainController.get_southamerican_mountains);

router.route("/southpole")
  .get(mountainController.get_southpole_mountains);

router.route("/currentMountain")
  .get(mountainController.get_current_mountain);

module.exports = router;