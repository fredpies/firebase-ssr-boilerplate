const express = require('express');
const bodyParser = require('body-parser');

import { view } from './views';
const app = express();

// middlewares

app.use(express.static('./static'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// globals
app.set('views', './pages')
app.set('view engine', 'pug')

// views
app.use(view);

export { app }
