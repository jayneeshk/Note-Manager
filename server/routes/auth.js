const express = require('express');
const { signup, login } = require('../controllers/auth');
const router = express.Router();

// Routes
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
