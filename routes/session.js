const express = require("express");
const initializeSession = require("../controller/SessionController")
const router = express.Router();

router.post( 
  "/initialize-session/", 
  initializeSession
);

module.exports = router;
