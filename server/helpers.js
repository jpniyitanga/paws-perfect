const { Pool } = require("pg");
const { database } = require("./db/connection");
const express = require("express");
const router = express.Router();

//Get owners by email
const getOwnersByEmail = async function (email) {
  return await database
    .query(`SELECT * FROM owners WHERE email = $1`, [email])
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.error(error);
    });
};

//Get all owners
const getOwners = async () => {
  return await database
    .query("SELECT * FROM owners;")
    .then((data) => {
      // console.log(data.rows);
      return data.rows;
    })
    .catch((error) => {
      console.error(error);
    });
};

//Get sitter by email
const getSittersByEmail = async function (email) {
  return await database
    .query(`SELECT * FROM sitters WHERE email = $1`, [email])
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.error(error);
    });
};

//Get all sitters
const getSitters = async () => {
  return await database
    .query("SELECT * FROM sitters;")
    .then((data) => {
      // console.log(data.rows);
      return data.rows;
    })
    .catch((error) => {
      console.error(error);
    });
};

// Get all bookings
const getAllBookings = async () => {
  return await database
    .query("SELECT * FROM bookings;")
    .then((res) => {
      return res.rows;
    })
    .catch((err) => console.log(err.message));
};

// Get booking requests by sitter_id
const getBookingBySitterId = async (sitter_id) => {
  
  return await database
    .query(`SELECT 
    o.first_name || ' ' || o.last_name AS owner_full_name,
    p.name AS pet_name,
    p.description AS pet_description,
    p.type AS pet_type,
    b.start_date AS booking_start_date,
    b.end_date AS booking_end_date,
    b.status
FROM 
    bookings b
JOIN 
    pets p ON b.pet_id = p.id
JOIN 
    owners o ON b.owner_id = o.id
WHERE 
    b.sitter_id = $1 AND b.status = 'pending' ;
`, [sitter_id])
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    })
    .catch((err) => console.log(err.message));
};

//Get sitter by id
const getSitterById = async (sitter_id) => {
  return await database
    .query(`SELECT * FROM sitters WHERE id = $1;`, [sitter_id])
    .then((res) => {
      console.log(res.rows);
      return res.rows[0];
    })
    .catch((err) => console.log(err.message));
};

// Get pets by owner email
const getPetByOwnerId = async (owner_id) => {
  return await database
    .query(`SELECT * FROM pets WHERE owner_id = $1;`, [owner_id])
    .then((res) => {
      console.log(res.rows);
      return res.rows[0];
    })
    .catch((err) => console.log(err.message));
};

//create booking

const createBooking = async (booking) => {

  console.log('@ helper', booking.min);
  

  const query = `
    INSERT INTO bookings (start_date, end_date, status, pet_id, owner_id, sitter_id)  
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  

  const values = [
    booking.min,
    booking.max, 
    booking.status,
    booking.sitter.pet_id,
    booking.sitter.owner_id,
    booking.sitter.sitter_id
  ];
  const result = await database.query(query, values);

  return result.rows[0];
}


// const findSitterEmail = async (sitter_id) => {
//   return await database
//     .query(`SELECT first_name, email FROM sitters WHERE sitter_id = $1;`, [sitter_id])
//     .then((res) => {
//       console.log(res.rows);
//       return res.rows[0];
//     })
//     .catch((err) => console.log(err.message));
// };


module.exports = {
  getOwners,
  getOwnersByEmail,
  getSitters,
  getSittersByEmail,
  getBookingBySitterId,
  getAllBookings,
  getPetByOwnerId,
  getSitterById,
  createBooking
};
