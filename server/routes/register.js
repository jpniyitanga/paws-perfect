const express = require("express");
const router = express.Router();
const { database } = require("../db/connection");
const bcrypt = require("bcrypt");

// Registration route
router.post("/register", async (req, res) => {
  const { first_name, last_name, email } = req.body; 

  try {
    // Save user to the database
    await database.query(
      "INSERT INTO owners (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
      [first_name, last_name, email, hashedPassword]
    );

    // Automatically sign in the user after registration
    req.session.email = email;
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
