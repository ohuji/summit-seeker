'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const createPost = async (post, res) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO Userposts(
        MountainID, UserID, Title, Description, Equipment, Imagename) VALUES (?,?,?,?,?,?)`,
        [2, 6, post.jtitle, post.jdescription, post.jequipments, post.jimage]);

    /* Real one
    const [rows] = await promisePool.query(`INSERT INTO Userposts(
        MountainID, UserID, Title, Description, Equipment, Imagename) VALUES (?,?,?,?,?,?)`,
        [post.MountainID, post.UserID, post.Title, post.Description, post.Equipment, post.Imagename]);
     */

    console.log('post model insert', rows[0]);
    return rows[0];
  } catch (error) {
    console.error('createPost error', error.message);
    res.status(500).json({ message: 'something went wrong with posting'});
    return;
  }
}


const getPopularJourneysByMountain = async (res) => {
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
        
        INNER JOIN Mountains
        ON Userposts.MountainID = ?
        
        ORDER BY Userposts.Likes
        DESC LIMIT 10`);

    return rows;
  } catch (error) {
    console.error("error", error.message);

    res.status(500).json({ message: "Something went wrong with popular journeys" });
    return;
  }
};

module.exports = {
  createPost,
};