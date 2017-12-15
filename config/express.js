const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
var flash = require('connect-flash');

module.exports = function () {
    const app = express();
    if (process.env.NODE_ENV === "development") {
        app.use(morgan('dev'));
    } else {
        app.use(compression());
    }
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // Add headers
    app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
    });

    var config = require('./config');

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitializeed: true,
    }));

    app.use(passport.initialize()); // start passport
    app.use(passport.session()); // use session via express-session
    app.use(flash());

    require('../app/routes/index.route')(app);
    require('../app/routes/user.route')(app);
    require('../app/routes/post.route')(app);
    require('../app/routes/item.route')(app);
    require('../app/routes/upload.route')(app);

    return app;
}
