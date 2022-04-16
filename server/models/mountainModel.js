'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllMountains = async (res) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM Mountains`);
    return rows;

  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: 'Something went wrong when climbing the mountains'});
  };
};

module.exports =  {
  getAllMountains,
}