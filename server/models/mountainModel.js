'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

/*
  Retrieve mountains based on location
*/

const getHimalayanMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "Himalayas"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

const getEuropeanMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "Europe"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

const getAfricanMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "Africa"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

const getCentralAsianMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "Central Asia"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

const getSoutheastAsianMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "Southeast Asia"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

const getAustralianMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "Australia"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

const getNorthAmericanMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "North America"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

const getSouthAmericanMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "South America"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

const getSouthPoleMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains WHERE Location = "South Pole"`);
    
    return rows;
  } catch (e) {
    console.log("error", e.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

// Retrieve mountain info from db based on given id
const getCurrentMountain = async (id, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM Mountains WHERE ID = ?', [id]);
    return rows[0];
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: 'Something went wrong when getting the current mountain'});
    return;
  };
};

module.exports =  {
  getHimalayanMountains,
  getEuropeanMountains,
  getAfricanMountains,
  getCentralAsianMountains,
  getSoutheastAsianMountains,
  getAustralianMountains,
  getNorthAmericanMountains,
  getSouthAmericanMountains,
  getSouthPoleMountains,
  getCurrentMountain,
}