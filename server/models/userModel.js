"use strict";

const pool = require('../database/db');
const promisePool = pool.promise();

// Get username and hashed password, add user to db
const addUser = async (username, hash, res) => {
    try {
        const [rows] = await promisePool.query(`INSERT INTO Users (Username, Password)
         VALUES (?, ?)`, [username, hash]);

         return rows;
    } catch(e) {
        console.log("error", e.message);
        res.status(500).json({ message: "Something went wrong with inserting user" });
    }
};

// get user for login
const getUserLogin = async (params) => {
    try {
        const [rows] = await promisePool.execute(`SELECT * 
         FROM Users WHERE Username = ?;`, params);

        return rows;
    } catch (e) {
        console.log("error", e.message);
    }
};

module.exports = {
    addUser,
    getUserLogin,
};