const express = require('./config/express');
const passport = require('./config/passport');
const mongoose = require('./config/mongoose');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3005;

var db = mongoose();
var app = express();
var psp = passport();
app.listen(process.env.PORT, () => {
     console.log('Starting node.js on port ' + process.env.PORT);
});

module.exports = app;
