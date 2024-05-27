// app.js

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cocoaRouter = require('./cocoaRoutes'); // Import cocoaRoutes.js
const addCocoaPriceRouter = require('./addCocoaPriceRoute'); // Import addCocoaPriceRoute.js

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', cocoaRouter); // Mount cocoaRouter at /api
app.use('/api', addCocoaPriceRouter); // Mount addCocoaPriceRouter at /api

module.exports = app;

