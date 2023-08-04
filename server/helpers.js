// const { Pool } = require("pg");
// const { database } = require("./db/connection");
// const express = require("express");
// const router = express.Router();

// //Get owners by email
// const getOwnersByEmail = async function (email) {
//   return await database
//     .query(`SELECT * FROM owners WHERE email = $1`, [email])
//     .then((result) => {
//       return result.rows[0];
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// //Get all owners
// const getOwners = async () => {
//   return await database
//     .query("SELECT * FROM owners;")
//     .then((data) => {
//       // console.log(data.rows);
//       return data.rows;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// //Get sitter by email
// const getSittersByEmail = async function (email) {
//   return await database
//     .query(`SELECT * FROM sitters WHERE email = $1`, [email])
//     .then((result) => {
//       return result.rows[0];
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// //Get all sitters
// const getSitters = async () => {
//   return await database
//     .query("SELECT * FROM sitters;")
//     .then((data) => {
//       // console.log(data.rows);
//       return data.rows;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// // Get all bookings
// const getAllBookings = async () => {
//   return await database
//     .query("SELECT * FROM bookings;")
//     .then((res) => {
//       return res.rows;
//     })
//     .catch((err) => console.log(err.message));
// };

// // Get booking by sitter id
// const getBookingBySitterId = async (sitter_id) => {
//   return await database
//     .query(`SELECT * FROM bookings WHERE id = $1;`, [sitter_id])
//     .then((res) => {
//       console.log(res.rows);
//       return res.rows[0];
//     })
//     .catch((err) => console.log(err.message));
// };

//Get sitter by id
// const getSitterById = async (sitter_id) => {
//   return await database
//     .query(`SELECT * FROM sitters WHERE id = $1;`, [sitter_id])
//     .then((res) => {
//       console.log(res.rows);
//       return res.rows[0];
//     })
//     .catch((err) => console.log(err.message));
// };


// const getSitterById = async (sitter_id) => {
//   try {
//     // Fetch sitter data and related booking data using a JOIN query
//     const query = `
//       SELECT sitters.*, bookings.sitter_rating, bookings.sitter_review
//       FROM sitters
//       LEFT JOIN bookings ON sitters.id = bookings.sitter_id
//       WHERE sitters.id = $1;
//     `;
    
//     const response = await database.query(query, [sitter_id]);
//     const sitterWithRatingAndReview = response.rows[0];

//     return sitterWithRatingAndReview;
//   } catch (err) {
//     console.error('Error fetching sitter data:', err.message);
//     return null;
//   }
// };




// // Get pets by owner email
// const getPetByOwnerId = async (owner_id) => {
//   return await database
//     .query(`SELECT * FROM pets WHERE owner_id = $1;`, [owner_id])
//     .then((res) => {
//       console.log(res.rows);
//       return res.rows[0];
//     })
//     .catch((err) => console.log(err.message));
// };



// module.exports = {
//   getOwners,
//   getOwnersByEmail,
//   getSitters,
//   getSittersByEmail,
//   getBookingBySitterId,
//   getAllBookings,
//   getPetByOwnerId,
//   getSitterById
// };
