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
    async (Username, Password, done) => {
        const params = [Username];
        // Compare credentials and login if succesfull
        try {
            const [user] = await getUserLogin(params);
            console.log("u: ", user);
            if (user === undefined) {
                return done(null, false, { message: "incorrect credentials" });
            }

            if (!await bcrypt.compare(Password, user.Password)) {
                return done(null, false, { message: "incorrect credentials" });
            }

            delete user.Password;

            return done(null, {...user}, { message: "logged in" });
        } catch (err) {
            return done(err);
        }
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }, 
        (jwtPayload, done) => {
            done(null, jwtPayload);
        }
));

module.exports = passport;