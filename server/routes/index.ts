import express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/plan', require('./plan'));

module.exports = router;
