const Session = require('../models/Session');
const { check, validationResult, body } = require("express-validator"); 

const initializeSession = async (req, res) => {
  // Check inputs validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { session } = req.body;
  try {      
    // ToDo: specify values of location
    const insertSession = new Session({ 
      user: session.user,
      subject: session.subject,
      tools: session.tools,
      plannedDate: session.plannedDate,
      location: null
    });
    // save session into database
    await insertSession.save();
    res.json("Initialized session: " + session);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
}

const retrieveSessions = async (req, res) => {
  try {
    Session.find({})
      .then(result => res.status(200).json({ result }))
      .catch(error => res.status(500).json({ msg: error }));
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
}

module.exports = { initializeSession, retrieveSessions };