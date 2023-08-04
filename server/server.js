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
const sitterDetailRouter = require('./routes/sittersDetail');
const sitterReviewRouter = require('./routes/sittersReviewListing');




//Use Routers
app.use('/', usersRoutes);
app.use('/bookings', bookingsRoutes);
app.use('/sitters', sitterDetailRouter);
app.use('/sitterreview',sitterReviewRouter);



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




axios
  .get("https://api.thecatapi.com/v1/images/0XYvRd7oD")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});
