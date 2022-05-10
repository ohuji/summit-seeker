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
        console.log("a:", params);
        try {
            const [user] = await getUserLogin(params);
            console.log("u: ", user);

            if (user === undefined) {
                return done(null, false, { message: "incorrect credentials" });
            }

            console.log('user.password outside of compare: ', user.Password);
            console.log('password outside of compare: ', Password);

            if (!await bcrypt.compare(Password, user.Password)) {
              console.log('user.password inside of compare: ', user.Password);
              console.log('password inside of compare: ', Password);
                return done(null, false, { message: "incorrect credentials" });
            }

            delete user.Password;

          console.log('{...user}: ', {...user});

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