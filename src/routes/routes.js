const express = require('express');

const router = express.Router();

const { login } = require('../controllers/api/session/login');
const { addUser } = require('../controllers/api/user/registerUser');
const { searchEmail } = require('../controllers/api/user/searchUserEmail');
const { logout } = require('../controllers/api/session/logout');

//----------------------------USER----------------------------
router.post('/login', login); //user e admin | criação de token
router.post('/register', searchEmail, addUser);  //user e admin | criação de token
router.post('/logout', logout);
//----------------------------USER----------------------------



module.exports = router;