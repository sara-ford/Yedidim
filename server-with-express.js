require('dotenv').config();
const express = require('express');
const { connect } = require('./db/connect'); // Adjust the path if necessary
const volunteerRouter = require('./routers/volunteerRouter.js');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.use('/api/Volunteers', volunteerRouter);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred, please try later...');
});

app.listen(PORT, () => {
    console.log(`Express server is running at http://127.0.0.1:${PORT}`);
});
