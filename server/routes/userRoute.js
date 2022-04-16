"use strict";

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/token")
    .get(userController.checkToken);

module.exports = router;