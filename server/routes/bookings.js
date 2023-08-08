const express = require("express");
const router = express.Router();
const { database } = require("../db/connection");
const {
  getBookings,
  updateBookingById,
  getBookingById,
  addBooking,
} = require("../db/queries/bookings");
const { sendNewBookingNotification, findSitterInBooking, findOwnerInBooking } = require("../helpers");

/* GET bookings listing. */
router.get("/bookings", async (req, res) => {
  try {
    const allBookings = await getBookings();
    res.json(allBookings);
  } catch (error) {
    console.error(error);
  }
});

/* GET booking by id. */
router.get("/bookings/:id", async (req, res) => {
  try {
    const selectedBooking = await getBookingById(req.params.id);
    res.json(selectedBooking);
  } catch (error) {
    console.error(error);
  }
});

/* UPDATE booking by id. */
router.put("/bookings/:id", async (req, res) => {
  try {
    const updatedBooking = await updateBookingById(req.params.id);
    res.json(updatedBooking);
  } catch (error) {
    console.log(error)
  }
});

/* POST a booking */
router.post("/bookings", async (req, res) => {
  try {
    const newBooking = await addBooking();
    res.json(newBooking);
    // const sitter = await findSitterInBooking(newBooking.sitter_id);
    // sendNewBookingNotification(sitter);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
