const express = require("express");
const router = express.Router();
const { check, validationResult, body } = require("express-validator"); 

const {
  initializeUser,
  retrieveUsers
} = require("../controller/UserController");

router.get(
  "/retrieve-user/",
  retrieveUsers
);

router.post(
  "/initialize-user/",
  [check("email", "Entered email not valid ").isEmail()],
  initializeUser
);

module.exports = router;
