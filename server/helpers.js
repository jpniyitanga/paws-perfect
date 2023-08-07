const { Pool } = require("pg");
const { database } = require("./db/connection");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const findSitterEmail = async (sitter_id) => {
  try {
    const sitter = await database
      .query(`SELECT first_name, email FROM sitters WHERE sitter_id = $1;`, [sitter_id])
      return res.rows[0];    
  } catch (error) {
    console.error(error)
  }
};

// when using thi function in bookings route, remember to pass the receiver object as a parameter
const sendNewBookingNotification = async () => {
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

module.exports = { sendNewBookingNotification, findSitterEmail };
