const express = require('express');
const controller = require('../controllers/requestsController');

const router = express.Router();

router.get('/', controller.getAll);

router.get('/priority/:priorityCode', controller.getByPriorityCode);

module.exports = router;
