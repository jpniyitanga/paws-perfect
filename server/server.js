const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
// const { Pool } = require("pg");
const { database } = require('./db/connection');
const app = express();



const getOwners = async () => {
  return await database
    .query("SELECT * FROM owners;")
    .then((data) => {
      console.log(data.rows);
      return data.rows;
    })
    .catch((error) => {
      console.error(error);
    });
};

// getOwners()

const getBookingBySitterEmail = async (sitter_id) => {
  return await database
    .query(`SELECT * FROM bookings WHERE sitter_id = $1;`, [sitter_id])
    .then((res) => {
      console.log(res.rows)
      return res.rows[0];
    })
    .catch((err) => console.log(err.message));
};

getBookingBySitterEmail("1");


app.get("/", async (req, res) => {
  const result = await database.query("SELECT * FROM sitters;").then(data)
})







app.listen(3001, () => {
  console.log("Express server is running on port 3001");
});
