const express = require('express');
const router = express.Router();
const { database } = require("../db/connection");

/* GET users listing. */
router.get('/', async (req, res) =>{
  try {
    const bookings = await database.query("SELECT * FROM owners");
    res.json(bookings.rows);
  } catch (error) {
    console.error(error)
  }
});



module.exports = router;
