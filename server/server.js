const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const cors = require("cors");
const { database } = require("./db/connection");
const app = express();
app.use(cors());

const {getOwners, getOwnersByEmail, getSitters, getSittersByEmail} = require('./helpers')



app.get("/api", async (req, res) => {
  console.log("Request");
  res.json({ "users": ["user1", "user2", "user3", "user4"] });
});



app.get("/owners", async (req, res) => {
  try {
    const owners = await database.query("SELECT * FROM owners");
    res.json(owners.rows);
  } catch (error) {
    console.error(error)
  }
});


app.get("/sitters", async (req, res) => {
  try {
    const owners = await database.query("SELECT * FROM sitters");
    res.json(owners.rows);
  } catch (error) {
    console.error(error);
  }
});

axios
  .get("https://api.thecatapi.com/v1/images/0XYvRd7oD")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });



app.listen(8080, () => {
  console.log("Express server is running on port 8080");
});
