const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

const bodyparser = require('body-parser');




const app = express();

mongoose.connect('mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon');
mongoose.connection.on('error', () => {
    console.log('Error on connecting DB');
    process.exit(1);
});

const record = require('./controllers/record')(require('./models/record')(mongoose));

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', record);

app.listen(PORT, () => {
    // console.log(PORT + ' listening!');
});
