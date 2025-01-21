const mongoose = require('mongoose');
const Volunteer = require('../models/Volunteers.model.js');

async function connect() {
    try {
        console.log('Trying to connect to MongoDB...');
        await mongoose.connect('mongodb://127.0.0.1:27017/Yedidim', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Yedidim db');

        const volunteers = await Volunteer.find();
        console.log('Volunteers:', volunteers);
    } catch (error) {
        console.log('Connection error:', error);
        throw new Error('Error connecting to db. Please try later...');
    }
}

module.exports = { connect };
