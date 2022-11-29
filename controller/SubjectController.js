const Subject = require("../models/Subject");
const { check, validationResult, body } = require("express-validator");

const initializeSubject = async (req, res) => {
  // Check inputs validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { subject } = req.body;
  try {
    let existingSubject = await User.findOne({ subject });
    if (!existingSubject) {
      const insertSubject = new Subject({ user: subject.User, startDate: subject.StartDate });
      await insertSubject.save();
    }

    res.json({ insertSubject });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

const retrieveSubjects = async (req, res) => {
  try {
    Subject.find({})
      .then((result) => res.status(200).json({ result }))
      .catch((error) => res.status(500).json({ msg: error }));
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

module.exports = { initializeSubject, retrieveSubjects };
