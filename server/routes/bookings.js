const express = require('express');
const router = express.Router();
const { database } = require("../db/connection");

/* GET bookings listing. */
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await database.query("SELECT * FROM bookings");
    res.json(bookings.rows);
  } catch (error) {
    console.error(error)
  }
});



module.exports = router;