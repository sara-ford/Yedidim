const mongoose = require('mongoose');

async function connect() {
    console.log('Attempting to connect to MongoDB...');

    try {
        await mongoose.connect('mongodb://localhost:27017/Yedidim');
        console.log('Connected to Yedidim');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw new Error('Error connecting to the database. Please try later...');
    }
}

module.exports = { connect };
