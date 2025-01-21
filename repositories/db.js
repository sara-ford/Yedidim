
const mongoose = require('mongoose');
const Volunteer = require('../models/Volunteers.model.js');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Yedidim');
        console.log('connected to Yedidim db');
        const volunteers = await Volunteer.find({});
        console.log('Fetched volunteers:', volunteers);
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to db. Please try later...');
    }
}

module.exports = { connect };
