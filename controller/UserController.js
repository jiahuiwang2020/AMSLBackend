const User = require("../models/User");
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

    let user = await User.findOne({ email });
    if (!user) {
      const user = new User({ email: email });
      await user.save();
    }

    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

const retrieveUsers = async (req, res) => {
  try {
    User.find({})
      .then((result) => res.status(200).json({ result }))
      .catch((error) => res.status(500).json({ msg: error }));
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

module.exports = { initializeUser, retrieveUsers };
