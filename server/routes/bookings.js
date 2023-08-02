const express = require('express');
const router = express.Router();
const { database } = require("../db/connection");


//router module is not working. Can get bookings from server but not from routes

/* GET bookings listing. */
router.get('/', async (req, res) => {
  try {
    const bookings = await database.query("SELECT * FROM bookings");
    res.json(bookings.rows);
  } catch (error) {
    console.error(error)
  }
});



module.exports = router;