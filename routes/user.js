const express = require("express");
const router = express.Router();
const { check, validationResult, body } = require("express-validator"); 

//Middleware
const auth = require("../middleware/auth");

const {
  initializeUser,
  retrieveUsers,
  updateUser
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

router.put(
  "/update-user/",
  [auth],
  updateUser
);

module.exports = router;
