const express = require('express');
const router = express.Router();
const { database } = require("../db/connection");
//const { addSitter, getSitterById, updateSitterById, getSitters } = require('../db/queries/sitters');



// 1. Fetch sitter's availability
router.get('/availability/:sitter_id', async (req, res) => {
  try {
      const sitterId = req.params.sitter_id;
      const result = await database.query(`SELECT availability_dates FROM sitters WHERE id=$1`, [sitterId]);
      res.json(result.rows);
  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
});

// 2. Add new availability for the sitter
router.post('/availability', async (req, res) => {
  try {
      const { sitterId, availabilityDate } = req.body;
      const queryString = `UPDATE sitters SET availability_dates = array_append(availability_dates, $1) WHERE id=$2`;
      await database.query(queryString, [availabilityDate, sitterId]);
      res.json({ success: true, message: 'Availability added' });
  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
});

// 3. Update an availability for the sitter
// Assuming you are sending the old date to be replaced and the new date
router.put('/availability', async (req, res) => {
  try {
      const { sitterId, oldDate, newDate } = req.body;
      const queryString = `UPDATE sitters SET availability_dates = array_replace(availability_dates, $1, $2) WHERE id=$3`;
      await database.query(queryString, [oldDate, newDate, sitterId]);
      res.json({ success: true, message: 'Availability updated' });
  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
});

// 4. Delete an availability for the sitter
router.delete('/availability', async (req, res) => {
  try {
      const { sitterId, dateToRemove } = req.body;
      const queryString = `UPDATE sitters SET availability_dates = array_remove(availability_dates, $1) WHERE id=$2`;
      await database.query(queryString, [dateToRemove, sitterId]);
      res.json({ success: true, message: 'Availability removed' });
  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;