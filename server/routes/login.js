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
router.post('/login', async (req, res) => {
  const {userId} = req.body;
  try {
    const result = await findUser(sub_id);
    
    // If user does not exist, redirect to register form
    if (result.sub_id !== userId) { 
      return res.status(401).json({ message: "Invalid user, please register" });
      res.redirect("/register");
    }
    const existingUser = result.rowCount > 0;
    res.json({ exists: existingUser }); 
    
    
    // Save user's email in session
    req.session.email = existingUser.email;
    console.log(req.session);
    res.json({' message': 'Logged in successfully' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
