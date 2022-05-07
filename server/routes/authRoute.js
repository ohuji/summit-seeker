"use strict";

const express = require("express");
const router = express.Router();
const {body, sanitizeBody} = require("express-validator");
const {login, create_user, logout} = require("../controllers/authController");

//Auth routes

router.post("/login", login);

router.post("/register",
    [
        //Check if username is min 4 chars and password is secure enough
        body("username", "min 4 characters").isLength({min: 4}),
        body("password", "has to be secure").isStrongPassword(),
        sanitizeBody("username").escape(),
    ],
    create_user
);

router.get("/logout", logout);

module.exports = router;