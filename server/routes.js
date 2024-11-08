const express = require('express');
const router = express.Router();
const controller = require('./controller'); // Import the controller file

// Define a route for handling the URL input
router.post('/submit-url', controller.takeURL);

module.exports = router;