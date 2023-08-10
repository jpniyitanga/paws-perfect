const express = require("express");
const router = express.Router();
const { database } = require("../db/connection");
const { getBookings, updateBookingById, getBookingById, addBooking } = require('../db/queries/bookings');


/* GET bookings listing. */
router.get("/", async (req, res) => {
  try {
    const allBookings = await getBookings();
    res.json(allBookings);
  } catch (error) {
    console.error(error);
  }
});

/* GET booking by id. */
router.get("/:id", async (req, res) => {
  try {
    const selectedBooking = await getBookingById(req.params.id);
    res.json(selectedBooking);
  } catch (error) {
    console.error(error);
  }
});



/* UPDATE booking by id. */

// router.post("/update", async (req, res) => {
//   try {
//     const id = req.body.reqid;
//     const status = req.body.status;
//     const updatedBooking = await updateBookingById(id, status);
    
//     res.json(updatedBooking);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "An error occurred while updating the booking." });
//   }
// });



module.exports = router;
