const express = require("express");
const router = express.Router();

const {
  initializeSubject,
  retrieveSubjects
} = require("../controller/SubjectController");

router.get(
  "/retrieve-subject/",
  retrieveSubjects
);

router.post(
  "/initialize-subject/",
  initializeSubject
);

module.exports = router;
