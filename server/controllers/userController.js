"use strict";

// Check if token exist, if not throw new Error
const checkToken = (req, res, next) => {
    if (!req.user) {
        next(new Error("token is not valid"));
    } else {
        res.json({ user: req.user });
    }
};

module.exports = {
    checkToken,
}