const express = require("express");
const router = express.Router();

// Logout route
router.post("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error logging out:", err);
        return res
          .status(500)
          .json({ message: "An error occurred while logging out." });
      }
      res.clearCookie("connect.sid");
      res.json({ message: "Logged out successfully." });
    });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "An error occurred while logging out." });
  }
});

// Logout route
// app.post('/logout', (req, res) => {
//   // Clear the user's session
//   req.session.destroy((err) => {
//     if (err) {
//       console.error(err);
//       return res.sendStatus(500);
//     }
//     res.json({ message: 'Logged out successfully' });
//   });
// });

// Middleware to check if a user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.session.email) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "You must be logged in to access this resource." });
  }
};

module.exports = router;
