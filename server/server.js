const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Import Routes module
const sittersRoutes = require('./routes/sitters');
const ownersRoutes = require('./routes/owners');
// const bookingsRoutes = require('./routes/bookings');
const sitterDetailRouter = require('./routes/sittersDetail');
const sitterReviewRouter = require('./routes/sittersReviewListing');
const bookingsRoute = require('./routes/bookings'); 

//Use Routers
//app.use('/', usersRoutes);
//app.use('/bookings', bookingsRoutes);
app.use('/sitters', sitterDetailRouter);
app.use('/sitterreview',sitterReviewRouter);

app.use('/api', bookingsRoute); // Use the bookings route




//Use Routes
app.use('/', sittersRoutes);
app.use('/', ownersRoutes);
//app.use('/', bookingsRoutes);






const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});
