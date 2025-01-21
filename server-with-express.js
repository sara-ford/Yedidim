require('dotenv').config();
const express = require('express');

const volunteerRouter = require('./routers/volunteerRouter'); 

const app = express();

app.use(express.json());

app.use('/api/Volunteers', volunteerRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred, please try later...');
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log(`express server is running at http://${host}:${port}`);
});
