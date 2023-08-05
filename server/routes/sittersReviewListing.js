const express = require('express');
const router = express.Router();
const { database } = require("../db/connection");

/* GET sitters review listing. */
router.get('/', async (req, res) => {
  try {
    const review = await database.query(" SELECT sitters.*, bookings.* FROM sitters LEFT JOIN bookings ON sitters.id = bookings.sitter_id");
    res.json(review.rows);
  } catch (error) {
    console.error(error)
  }
});



module.exports = router;