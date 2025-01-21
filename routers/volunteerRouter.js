const express = require('express');
const controller = require('../controllers/vulonteersController'); // יש לוודא שהנתיב נכון

const router = express.Router();

router.get('/', controller.getAll); // כאן אנחנו קוראים ל-Controller שיחזיר את כל הנתונים

module.exports = router;
