const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteers.model.js');

router.get('/', async (req, res) => {
    try {
        const volunteers = await Volunteer.find({});
        res.json(volunteers);
    } catch (error) {
        console.log('Error fetching volunteers:', error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;
