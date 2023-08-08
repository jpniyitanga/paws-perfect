const { Pool } = require("pg");
const { database } = require("./db/connection");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const findSitterInBooking = async (sitter_id) => {
  try {
    const sitter = await database
      .query(`SELECT first_name, email FROM sitters WHERE id = $1;`, [sitter_id])
      return res.rows[0];    
  } catch (error) {
    console.error(error)
  }
};

const findOwnerInBooking = async (owner_id) => {
  try {
    const owner = await database.query(
      `SELECT first_name, email FROM owners WHERE id = $1;`,[owner_id]);
    return res.rows[0];
  } catch (error) {
    console.error(error);
  }
};

// when using this function in bookings route, remember to pass the receiver object as a parameter
const sendNewBookingNotification = async (receiver) => {
  // const { email, message } = data;
  // const emailData = {
  //   from: "jpniyitanga@gmail.com", // Replace with your email address (sender)
  //   to: "nijepi@yahoo.fr",
  //   subject: "Notification: You have a New Booking Request",
  //   text: "Hello there",
  // };  
  try {
      const receiver = {
      name: "John",
      email: "jpniyitanga@gmail.com",
    };

    await sgMail.send({
      from: "Paws perfect <jpniyitanga@gmail.com>",
      // to: receiver.email,
      // subject: "You have a New Booking Request!",
      // html: `Hello there ${receiver.name}, You have a new booking request! Please log into your account for more information!`,
      // text: `Hello there ${receiver.name}, You have a new booking request! Please log into your account for more information! `,
      templateId: "d-1684f89a209a4c4da69354a7f68febec",
      personalizations: [
        {
          to: `<${receiver.email}>`,
        },
      ],
      dynamicTemplateData: {
        name: `${receiver.name}`,
        subject: "You have a New Booking Request!",
      },
    });
    console.log("Transactional email sent successfully");
  } catch (error) {
      console.log(error.message.body.errors);
    }     
};

// GET all available sitters by date range
const searchSittersbyDateRange = async () => {
  try {
    const startDate = await database.query(
      `SELECT MIN($1) AS start_date
FROM (
  SELECT UNNEST(availability_days) AS date_element
  FROM sitters 
) subquery;`,
      [date_element]
    );

    const endDate = await database.query(
      `SELECT MAX(data_element) AS end_date
FROM (
  SELECT UNNEST(availability_days) AS date_element
  FROM sitters 
) subquery;`,
      [date_element]
    );
    const availableSitters = await database.query(
      `SELECT * FROM sitters WHERE availability_days BETWEEN $1 AND $2`,
      [startDate, endDate]
    );
    return availableSitters.rows;
  } catch (error) {
    console.error(error)
  }
};

module.exports = {
  sendNewBookingNotification,
  findOwnerInBooking,
  findSitterInBooking,
  searchSittersbyDateRange
};
