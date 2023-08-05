const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const session = require("express-session");
// const pgSession = require("connect-pg-simple")(session);
const { database } = require("../db/connection");
const { getOwnerByEmail } = require("../db/queries/owners");
const {findUser} = require("../db/queries/users");

// app.use(bodyParser.json());
// app.use(
//   session({    
//     secret: "your_session_secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
//       httpOnly: true,
//     },
//   })
// );

// Login route
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // const result = await database.query('SELECT * FROM owners WHERE email = $1', [email]);
    // console.log(result.rows)
    
    // if (result.rows.length === 0) {
    //   return res.status(401).json({ message: 'Invalid email or password' });
    // }
console.log(email)
    const result = await findUser(email);
    

    const isPasswordMatch = await bcrypt.compare(password, result.password);
    console.log(isPasswordMatch)
    
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Save user's email in session
    req.session.email = email;
    console.log(req.session);
    res.json({' message': 'Logged in successfully' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
