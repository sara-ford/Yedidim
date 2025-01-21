const mongoose =require('mongoose');

// connect();

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Yedidim');
        console.log('connected to yedidim db');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to db. please try later...');
    }
}

module.exports = { connect };