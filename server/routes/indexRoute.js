"use strict";

const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

//Index routes

router.route("/popular")
    .get(indexController.get_popular_journeys);

router.route("/latest")
    .get(indexController.get_latest_journeys);

module.exports = router;