const functions = require('firebase-functions');
const { app } = require('./server');

exports.ssr = functions.https.onRequest(app);
