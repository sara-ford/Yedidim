const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String, 
    specialties: [String]
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
