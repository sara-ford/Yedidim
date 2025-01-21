
const express = require('express');
const controller = require('../controllers/vulonteersController')

const router = express.Router();

router.get('/', controller.getAll);

// router.get('/:studentId', controller.get)

// router.post('/', controller.insert)

// router.put('/:studentId', controller.update)

// router.delete('/:studentId', controller.delete)

module.exports = router;