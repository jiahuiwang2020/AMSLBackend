const User = require('../models/User');
const { check, validationResult, body } = require("express-validator"); 

// Helpers
const emailValidatorKIT = require("../helpers/validators/emailValidatorKIT");

const initializeUser = async (req, res) => {
  // Check inputs validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;
  try {
    if (!emailValidatorKIT(email)) {
      return res.status(400).json("Email not a KIT email.");
    }
    const insertUser = new User({ email: email });
    await insertUser.save();
    res.json("Initialized with KIT email: " + email);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
  }
}

module.exports = initializeUser;