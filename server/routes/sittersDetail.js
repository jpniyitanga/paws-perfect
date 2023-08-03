// routes/sittersDetail.js
const express = require('express');
const router = express.Router();
const { getSitterById } = require('../helpers'); // Update with the correct path

router.get('/:id', async (req, res) => {
  const sitterId = req.params.id;

  try {
    const sitter = await getSitterById(sitterId); // Use the imported function

    if (!sitter) {
      return res.status(404).json({ message: 'Sitter not found' });
    }

    return res.status(200).json({ message: 'Sitter', sitter });
  } catch (error) {
    console.error('Error fetching sitter details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
