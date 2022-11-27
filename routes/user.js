const express = require("express");
const router = express.Router();
const {
  initializeUser,
  retrieveUsers
} = require("../controller/UserController");

router.get(
  "/initialize-user/",
  retrieveUsers
);

router.post(
  "/initialize-user/",
  [check("email", "Entered email not valid ").isEmail()],
  initializeUser
);

module.exports = router;
