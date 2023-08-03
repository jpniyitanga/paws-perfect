const { database } = require("../connection");
const { json } = require("express");

// Get all bookings
const getBookings = async () => {
  try {
    const bookings = await database.query("SELECT * FROM bookings");
    console.log(bookings.rows)
    return bookings.rows;
  } catch (error) {
    console.error(error)
  }
};

// Get booking by sitter id
const getBookingsBySitterId = async (sitter_id) => {
  try {
    const bookingsbySitter = await database.query(
      `SELECT * FROM bookings WHERE sitter_id = $1;`, [sitter_id]);
    return bookingsbySitter.rows[0];
  } catch (error) {
    console.error(error)
  }
};

// Get booking by id
const getBookingById = async (id) => {
  try {
    const bookingbyId = await database.query(
      `SELECT * FROM bookings WHERE id = $1;`, [id]);
    return bookingbyId.rows[0];
  } catch (error) {
    console.error(error)
  }
};


// Update existing booking
const updateBookingById = async (id) => {
  try {
    const booking = await database.getBookingById(id);
    const queryString = `UPDATE bookings SET start_date=$1, end_date=$2, status=$3, sitter_review=$4, sitter_rating=$5, pet_id=$6, owner_id=$7, siter_id=$8 WHERE id=$8`;
    const values = [
      booking.start_date,
      booking.end_date,
      booking.status,
      booking.sitter_review,
      booking.sitter_rating,
      booking.pet_id,
      booking.owner_id,
      id
    ];
    const updatedBooking = await database.query(queryString, values);
    return updatedBooking.rows[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getBookings, getBookingsBySitterId, getBookingById, updateBookingById };
