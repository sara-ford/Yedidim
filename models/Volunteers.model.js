const mongoose = require('mongoose');

const volunteersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    specialties: Array
});

const Volunteer = mongoose.model('Volunteers', volunteersSchema);

module.exports = Volunteer;

console.log("jjj")