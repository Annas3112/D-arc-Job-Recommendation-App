const express = require('express');
const { addUser, login } = require('../controllers/user-controller');

const router = express.Router();

router.post('/addUser', addUser);
router.post('/login', login);

module.exports = {
    routes: router
}