const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const cors = require("cors");
const { database } = require("./db/connection");
const app = express();
app.use(cors());

const { getOwners, getOwnersByEmail, getSitters, getSittersByEmail } = require('./helpers');


// Import Router module
const usersRoutes = require('./routes/users');
const bookingsRoutes = require('./routes/bookings');


//Use Routers
app.use('/', usersRoutes);
app.use('/bookings', bookingsRoutes);


// app.get("/bookings", async (req, res) => {
//   try {
//     const bookings = await database.query("SELECT * FROM bookings");
//     res.json(bookings.rows);
//   } catch (error) {
//     console.error(error)
//   }
// });


app.get("/owners", async (req, res) => {
  try {
    const owners = await database.query("SELECT * FROM owners");
    res.json(owners.rows);
  } catch (error) {
    console.error(error)
  }
});


app.get("/sitters", async (req, res) => {
  try {
    const owners = await database.query("SELECT * FROM sitters");
    res.json(owners.rows);
  } catch (error) {
    console.error(error);
  }
});

axios
  .get("https://api.thecatapi.com/v1/images/0XYvRd7oD")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });



app.listen(8080, () => {
  console.log("Express server is running on port 8080");
});
