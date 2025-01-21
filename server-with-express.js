require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const volunteerRepo = require('./repositories/volunteerRepo');
const volunteerRouter = require('./routers/volunteerRouter');

const app = express();
const PORT = process.env.PORT || 8080;

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Yedidim');
        console.log('connected to Yedidim db');

        // Fetch data after connecting
        const volunteers = await volunteerRepo.getAll();
        console.log('Fetched volunteers:', volunteers);
    } catch (error) {
        console.error('Error connecting to db. Please try later...', error);
    }
}

connect();

app.use(express.json());
app.use('/api/Volunteers', volunteerRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred, please try later...');
});

app.listen(PORT, () => {
    console.log(`express server is running at http://127.0.0.1:${PORT}`);
});