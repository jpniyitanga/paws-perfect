const express = require("express");
const router = express.Router();
const { database } = require("../db/connection");
const  {updateBookingById, sendAcceptedBookingNotification, findOwnerInBooking, sendRejectedBookingNotification} =require('../helpers');



/* UPDATE booking by id. */

router.put("/", async (req, res) => {
  // console.log("in updateRequest", req.body);
  try {
    const id = 5;
    const status = 'rejected';
    // const id = req.body.reqid;
    // const status = req.body.status;
    const updatedBooking = await updateBookingById(id, status);
    console.log("Updated booking", updatedBooking)
    
    // res.json(updatedBooking);
    const owner = await findOwnerInBooking(updatedBooking.owner_id);
    console.log(owner)
    if (status === 'accepted') { 
      await sendAcceptedBookingNotification(owner);
    }
    if (status === 'rejected') {
      await sendRejectedBookingNotification(owner);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while updating the booking." });
  }
});

module.exports = router;