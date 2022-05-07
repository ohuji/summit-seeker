"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const userModel = require("../models/userModel");
const {validationResult} = require("express-validator");
require("dotenv").config();

// Login function
const login = (req, res, next) => {
    passport.authenticate("local", {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: "something went wrong with login",
                user: user,
            });
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }

            // Sign JWT token
            const token = jwt.sign(user, process.env.JWT_SECRET);

            return res.json({user, token});
        });
    }) (req, res, next);
};

// Register function
const create_user = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("error with creating user", errors);
        res.send(errors.array());
    } else {
        // Hash user password
        const hash = await bcrypt.hash(req.body.password, 10);

        let username = req.body.username;

        const result = await userModel.addUser(username, hash, res);

        if (result.insertId) {
            res.json({ message: "user created", user_id: result.insertId });
        } else {
            res.status(400).json({ error: "registeration error" });
        }
    }
};

// Logout function
const logout = (req, res) => {
    res.json({ message: "logged out" });
}


module.exports = {
    login,
    create_user,
    logout,
};