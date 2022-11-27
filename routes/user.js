const express = require("express");
const initializeUser = require("../controller/UserController")
const router = express.Router();

router.post(
  "/initialize-user/",
  [check("email", "Entered email not valid ").isEmail()],
  initializeUser
);

module.exports = router;
