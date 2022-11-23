const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

// Helpers
const emailValidatorKIT = require("../helpers/validators/emailValidatorKIT");

const router = express.Router();

router.post(
  "/initialize-user/",
  [check("email", "Entered email not valid ").isEmail()],
  async (req, res) => {
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

      res.json("Initialized with KIT email: " + email);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
