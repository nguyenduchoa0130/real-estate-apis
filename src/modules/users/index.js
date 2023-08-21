const router = require('express').Router();
const controller = require('./users.controller');

router.post('/login', controller.handleLogin);
router.post('/register', controller.handleRegister);

module.exports = router;
