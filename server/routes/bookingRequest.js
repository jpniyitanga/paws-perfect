const express = require("express");
const router = express.Router();
const { database } = require("../db/connection");
const {createBooking, sendNewBookingNotification, findSitterInBooking} =require('../helpers');





/* POST a booking */
router.post('/', async (req, res) => {
  const newBooking = {
    start_date: '2023-08-20',
    end_date: '2023-08-30',
    status: 'pending',
    pet_id: 3,
    owner_id: 11,
    sitter_id: 1
  };
  console.log(newBooking)
  try {
    // const newBooking = req.body;
    const booking = await createBooking(newBooking);

    // res.status(201).json({
    //   message: 'Booking Request successfully sent',
    //   booking     
    // });
    console.log(booking)
    const sitter = await findSitterInBooking(booking.sitter_id); 
    console.log("Sitter: ", sitter)
    await sendNewBookingNotification(sitter)

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: 'Error creating booking' });
  
  }
});




module.exports = router;
