const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/substances');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/substances', users);

module.exports = app;
