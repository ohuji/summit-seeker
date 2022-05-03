"use strict";

const pool = require("../database/db");
const promisePool = pool.promise();

const getPopularJourneys = async (res) => {
    try {
       const [rows] = await promisePool.query(`SELECT Userposts.ID,
        Userposts.MountainID,
        Userposts.UserID,
        Userposts.Title,
        Userposts.Description,
        Userposts.Equipment,
        Userposts.Imagename,
        Userposts.Postedtime,
        Userposts.Likes,
        Userposts.Dislikes,
        Users.ID,
        Users.Username,
        Users.Role
        FROM Userposts
        INNER JOIN Users
        ON Userposts.UserID = Users.ID
        ORDER BY Userposts.Likes
        DESC LIMIT 10`);

       return rows;
    } catch (error) {
       console.error("error", error.message);

       res.status(500).json({ message: "Something went wrong with popular journeys" });
       return;
    }
};

const getLatestJourneys = async (res) => {
    try {
       const [rows] = await promisePool.query(`SELECT Userposts.ID,
        Userposts.MountainID,
        Userposts.UserID,
        Userposts.Title,
        Userposts.Description,
        Userposts.Equipment,
        Userposts.Imagename,
        Userposts.Postedtime,
        Userposts.Likes,
        Userposts.Dislikes,
        Users.ID,
        Users.Username,
        Users.Role
        FROM Userposts
        INNER JOIN Users
        ON Userposts.UserID = Users.ID
        ORDER BY Userposts.Postedtime
        LIMIT 10`);

       return rows;
    } catch (error) {
       console.error("error", error.message);

       res.status(500).json({ message: "Something went wrong with latest journeys" });
       return;
    }
};

module.exports = {
    getPopularJourneys,
    getLatestJourneys,
};