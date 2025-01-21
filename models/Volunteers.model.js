const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    specialties: [String]
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema, 'Volunteers');

module.exports = Volunteer;
