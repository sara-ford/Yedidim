require('dotenv').config();
const express = require('express');
const volunteerRouter = require('./routers/volunteerRouter.js');
const requestRouter = require('./routers/requestsRouter.js');


const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/volunteers', volunteerRouter);
app.use('/api/requests', requestRouter);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred, please try later...');
});

app.listen(port, host, () => {
    console.log(`Express server is running at http://${host}:${port}`);
});
