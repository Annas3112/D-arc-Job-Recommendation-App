const firebase = require ('firebase');
const config = require ('./config.js');

const firebase_config = firebase.initializeApp(config.firebaseConfig);

module.exports = firebase_config;