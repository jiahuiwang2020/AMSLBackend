const express = require("express");
const router = express.Router();
const { 
  initializeSession,
  retrieveSessions
} = require("../controller/SessionController");


router.get( 
  "/retrieve-session/", 
  retrieveSessions
);

router.post( 
  "/initialize-session/", 
  initializeSession
);

module.exports = router;
