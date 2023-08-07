const { Pool } = require("pg");
const { database } = require("./db/connection");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
// require("dotenv").config();
// console.log(process.env.SENDGRID_API_KEY)




async function sendNotification() {
  // const { email, message } = data;
  const emailData = {
    to: "nijepi@yahoo.fr",
    from: "jpniyitanga@gmail.com", // Replace with your email address (sender)
    subject: "Notification: You have a New Booking Request",
    text: "Hello there",
  };

  try {
    await sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    try {
      await sgMail.send(emailData);
      console.log("Transactional email sent successfully");
    } catch (error) {
      console.error("Error sending transactional email:", error);
    }    
  } catch (error) {
    console.log(error)
  }

};

module.exports = (sendNotification);


















module.exports = {
  
};
