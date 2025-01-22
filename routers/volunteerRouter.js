const express = require('express');
const controller = require('../controllers/volunteersController.js');

const router = express.Router();

router.get('/', controller.getAll);

router.get('/phone/:phone', controller.checkIfVolunteerExisits);

router.post('/insertVolunteer', controller.insertVolunteer);


module.exports = router;
