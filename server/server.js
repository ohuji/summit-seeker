"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const indexRoute = require("./routes/indexRoute");
const mountainRoute = require("./routes/mountainRoute");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const passport = require("./utils/pass");
const port = 3030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("/auth", authRoute);
app.use("/", indexRoute);
app.use("/user", passport.authenticate("jwt", {session: false}), userRoute);
app.use("/mountains", passport.authenticate("jwt", {session: false}), mountainRoute);
app.use("/", passport.authenticate("jwt", {session: false}), mountainRoute);
app.use("/mountain", passport.authenticate("jwt", {session: false}), postRoute);

app.listen(port, () => console.log(`Listening on port: ${port}!`));