const mongoose = require('mongoose');

const requestsSchema = new mongoose.Schema({
  Location: {
    ZipCode: { type: Number, required: true },
    City: { type: String, required: true },
    Neighbourhood: { type: String, required: true },
    Street: { type: String, required: true }
  },
  Description: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  Status: { type: String, enum: ['waiting', 'in-progress', 'completed'], required: true },
  NumStuckPassengers: { type: Number, required: true },
  PriorityCode: { type: Number, required: true },
  VolunteerCode: { type: String, required: true } // שינינו ל-String
});

const Request = mongoose.model('Request', requestsSchema, 'Requests');

module.exports = Request;
