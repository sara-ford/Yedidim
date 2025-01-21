const mongoose = require('mongoose');

const volunteersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String, 
    specialties: [String] 
});

const Volunteer = mongoose.model('Volunteer', volunteersSchema);

module.exports = Volunteer;
