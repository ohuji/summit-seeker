"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const indexRoute = require("./routes/indexRoute");
const mountainRoute = require("./routes/mountainRoute");
const port = 3030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoute);
app.use("/mountains", mountainRoute);


app.listen(port, () => console.log(`Listening on port: ${port}!`));