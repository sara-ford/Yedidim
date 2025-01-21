const express = require('express');
const controller = require('../controllers/volunteersController');

const router = express.Router();

// ה-Route לשליפת כל הנתונים
router.get('/', controller.getAll);

module.exports = router;
