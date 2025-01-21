const mongoose = require('mongoose');

const VolunteersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String, 
    specialties: [String] // עדיף גם להגדיר את המאפיינים כך
});

const Volunteer = mongoose.model('Volunteer', VolunteersSchema);

module.exports = Volunteer;
