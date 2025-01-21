require('dotenv').config();
const express = require('express');

const volunteerRouter = require('./routers/volunteerRouter')

const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/volunteers',volunteerRouter)
// app.use('/api/courses',coursesRouter);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred, please try later...');
})

// app.listen(port, host, () => {
//     here we can do stuff that should be done once the server is up
//     console.log(`express server is running at http://${host}:${port}`);
// })