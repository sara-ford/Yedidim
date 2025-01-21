const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Yedidim', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connected to yedidim db');
    } catch (error) {
        console.log('Error connecting to DB:', error);
        throw new Error('Error connecting to DB');
    }
}

module.exports = { connect };
