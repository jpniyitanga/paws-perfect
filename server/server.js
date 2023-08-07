const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const bodyParser = require("body-parser");
// const mail = require("@sendgrid/mail");
require("dotenv").config();
// const {sendNotification} = require('./helpers')
// mail.setApiKey(
//   process.env.SENDGRID_API_KEY
// );
// console.log(process.env.SENDGRID_API_KEY)

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(
  session({
    secret: "your_session_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
    },
  })
);

// Import Routes
const sittersRoutes = require("./routes/sitters");
const ownersRoutes = require("./routes/owners");
const bookingsRoutes = require("./routes/bookings");
const loginRoute = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const registerRoute = require('./routes/register');

//Use Routes
app.use("/", sittersRoutes);
app.use("/", ownersRoutes);
app.use("/", bookingsRoutes);
app.use("/", loginRoute);
app.use("/logout", logoutRoutes);
app.use('/register', registerRoute);



// Monitor database for changes and send email notifications
// const sendNotification = async () => {
//   // const { email, message } = data;

//   const emailData = {
//     to: "jpniyitanga@gmail.com",
//     from: 'jpniyitanga@gmail.com', // Replace with your email address (sender)
//     subject: 'Notification: You have a New Booking Request',
//     text: "Hello"
//   };

//   try {
//     await mail.send(emailData);
//     console.log('Transactional email sent successfully');
//   } catch (error) {
//     console.error('Error sending transactional email:', error);
//   }
// };



// Listen to database changes
// const query = database.query('LISTEN record_update');

// database.on('notification', (msg) => {
//   console.log('Notification received:', msg.payload);
//   sendNotification(JSON.parse(msg.payload));
// });




app.listen(8080, () => {
  console.log("Express server is running on port 8080");
});
