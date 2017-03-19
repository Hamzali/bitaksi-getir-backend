const express = require('express');
const mongoose = require('mongoose');

const bodyparser = require('body-parser');

const app = express();

// DB connection.
mongoose.connect('mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon');
mongoose.connection.on('error', () => {
    console.log('Error on connecting DB');
    process.exit(1);
});

// Creating router with model.
const record = require('./controllers/record')(require('./models/record')(mongoose));

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json({limit: 1000}));
app.use('/', record);

app.listen(PORT, () => {
    // console.log(PORT + ' listening!');
});
