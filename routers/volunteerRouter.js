const express = require('express');
const controller = require('../controllers/volunteersController.js');

const router = express.Router();

router.get('/', controller.getAll);

module.exports = router;
