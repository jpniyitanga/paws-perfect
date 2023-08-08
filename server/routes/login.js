const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const session = require("express-session");
// const pgSession = require("connect-pg-simple")(session);
const { database } = require("../db/connection");
const { getOwnerByEmail } = require("../db/queries/owners");
const {findUser} = require("../db/queries/users");



// Login route
router.post('/api/login', async (req, res) => {
  console.log(req.body)
  const sub = req.body
  try {
    const result = await findUser(sub);
    
    // If user does not exist, redirect to register form
    if (!result) { 
      return res.status(401).json({ message: "Invalid user, please register" });
      // res.redirect("/register");
    } else {
      // should indicate user type
      const existingUser = result.rows[0];
      res.json(existingUser);       
      
      // Save user's id in session
      req.session.id = result.id;
      console.log(req.session);
      res.json({' message': 'Logged in successfully' });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
