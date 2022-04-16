"use strict";

const express = require("express");
const router = express.Router();
const {body, sanitizeBody} = require("express-validator");
const {login, create_user} = require("../controllers/authController");

router.post("/login", login);

router.post("/register",
    [
        body("username", "min 4 characters").isLength({min: 4}),
        body("password", "has to be secure").isStrongPassword(),
        sanitizeBody("username").escape(),
    ],
    create_user
);

module.exports = router;