"use strict";

const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const {getUserLogin} = require("../models/userModel");
const passportJWT = require("passport-jwt");
const bcrypt = require("bcryptjs");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
require("dotenv").config();

passport.use(new Strategy(
    async (username, password, done) => {
        const params = [username];

        try {
            const [user] = await getUserLogin(params);
            console.log(user);
            if (user === undefined) {
                return done(null, false, { message: "incorrect credentials" });
            }

            if (!await bcrypt.compare(password, user.password)) {
                return done(null, false, { message: "incorrect credentials" });
            }

            delete user.password;

            return done(null, {...user}, { message: "logged in" });
        } catch (err) {
            return done(err);
        }
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }, (jwtPayload, done) => {
            done(null, jwtPayload);
    }
));

module.exports = passport;