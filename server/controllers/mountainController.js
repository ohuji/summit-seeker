"use strict";

const mountainModel = require('../models/mountainModel');

// Get mountains

const get_himalayan_mountains = async (req, res) => {
  const mountains = await mountainModel.getHimalayanMountains(res);
  res.json(mountains);
};

const get_european_mountains = async (req, res) => {
  const mountains = await mountainModel.getEuropeanMountains(res);
  res.json(mountains);
};

const get_african_mountains = async (req, res) => {
  const mountains = await mountainModel.getAfricanMountains(res);
  res.json(mountains);
};

const get_centralasian_mountains = async (req, res) => {
  const mountains = await mountainModel.getCentralAsianMountains(res);
  res.json(mountains);
};

const get_southeastasian_mountains = async (req, res) => {
  const mountains = await mountainModel.getSoutheastAsianMountains(res);
  res.json(mountains);
};

const get_australian_mountains = async (req, res) => {
  const mountains = await mountainModel.getAustralianMountains(res);
  res.json(mountains);
};

const get_northamerican_mountains = async (req, res) => {
  const mountains = await mountainModel.getNorthAmericanMountains(res);
  res.json(mountains);
};

const get_southamerican_mountains = async (req, res) => {
  const mountains = await mountainModel.getSouthAmericanMountains(res);
  res.json(mountains);
};

const get_southpole_mountains = async (req, res) => {
  const mountains = await mountainModel.getSouthPoleMountains(res);
  res.json(mountains);
};

const get_current_mountain = async (req, res) =>  {

  const id = req.params.id;
  const mountain = await mountainModel.getCurrentMountain(id, res);
  res.json(mountain);
}

module.exports = {
  get_himalayan_mountains,
  get_european_mountains,
  get_african_mountains,
  get_centralasian_mountains,
  get_southeastasian_mountains,
  get_australian_mountains,
  get_northamerican_mountains,
  get_southamerican_mountains,
  get_southpole_mountains,
  get_current_mountain,
}