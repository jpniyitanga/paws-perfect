const express = require("express");
const router = express.Router();
const { database } = require("../db/connection");
const  {updateBookingById, sendAcceptedBookingNotification, find, findOwnerInBooking} =require('../helpers');



/* UPDATE booking by id. */

router.post("/", async (req, res) => {
  console.log("in updateRequest", req.body);
  try {
    const id = req.body.reqid;
    const status = req.body.status;
    const updatedBooking = await updateBookingById(id, status);
    console.log("Updated booking", updatedBooking)
    
    res.json(updatedBooking);
    const owner = await findOwnerInBooking(updatedBooking);
    await sendAcceptedBookingNotification(owner)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while updating the booking." });
  }
});

module.exports = router;