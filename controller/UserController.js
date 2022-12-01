const User = require("../models/User");
const { check, validationResult, body } = require("express-validator");
const jwt = require("jsonwebtoken");
const ip = require("ip");

const config = require("config");

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

    const loginData = {};
    loginData.ip = ip.address();

    // Return the JWT using jsonwebtoken
    const payload = {
      user: {
        id: user.id,
        email,
        ip: loginData.ip,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        return res.json({ token, user, loginData });
      }
    );
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

const updateUser = async (req, res) => {
  const {username,  degreeProgram} = req.body;
  try {
    const updatedUser = {
      username,
      degreeProgram
    };

    let existingUser = await User.findOne({ _id: req.user.id });

    if (!existingUser) {
      return res
        .status(400)
        .json({ errors: [{ message: "User not found by id" }] });
    }

    let user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $set: updatedUser },
      { new: true }
    );

    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

module.exports = { initializeUser, retrieveUsers, updateUser };
