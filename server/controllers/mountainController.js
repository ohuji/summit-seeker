"use strict";

const mountainModel = require('../models/mountainModel');

const get_mountains = async (req, res) => {
  const mountains = await mountainModel.getAllMountains(res);
  res.json(mountains);
};

module.exports = {
  get_mountains,
}