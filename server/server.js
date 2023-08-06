const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const bodyParser = require("body-parser");

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

app.listen(8080, () => {
  console.log("Express server is running on port 8080");
});
