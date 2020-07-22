'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var express = require('express');
var view = express.Router();
view.get('/', function (req, res) {
    res.render('index', { title: 'Index' });
});

var express$1 = require('express');
var bodyParser = require('body-parser');
var app = express$1();
// middlewares
app.use(express$1.static('./static'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// globals
app.set('views', './pages');
app.set('view engine', 'pug');
// views
app.use(view);

exports.app = app;
