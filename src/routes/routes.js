const express = require('express');
const router = express.Router();

const jwtUser = require('../auth/userAuth');

const { login } = require('../controllers/api/session/login');
const { addUser } = require('../controllers/api/user/registerUser');
const { searchEmail } = require('../controllers/api/user/searchUserEmail');
const { logout } = require('../controllers/api/session/logout');

const { addPedra } = require('../controllers/api/pedra/registerPedra');
const { deletePedra } = require('../controllers/api/pedra/deletePedra');
const { updatePedra } = require('../controllers/api/pedra/updatePedra');
const { listPedra } = require('../controllers/api/pedra/listPedra');
const { getPedra } = require('../controllers/api/pedra/getPedra');

const { addTroca } = require('../controllers/api/troca/registerTroca');
const { deleteTroca } = require('../controllers/api/troca/deleteTroca');
const { updateTroca } = require('../controllers/api/troca/updateTroca');
const { listTroca } = require('../controllers/api/troca/listTroca');
const { getTroca } = require('../controllers/api/troca/getTroca');

//----------------------------USER----------------------------
router.post('/login', login); //user e admin | criação de token
router.post('/register', searchEmail, addUser);  //user e admin | criação de token
router.post('/logout', logout);
//----------------------------USER----------------------------

//----------------------------PEDRA---------------------------
router.post('/addpedra', jwtUser, addPedra);
router.put('/updatePedra', jwtUser, updatePedra);
router.delete('/deletepedra', jwtUser, deletePedra);
router.get('listpedra', jwtUser, listPedra);
router.get('getpedra', jwtUser, getPedra);
//----------------------------PEDRA---------------------------

//----------------------------TROCA---------------------------
router.post('/addtroca', jwtUser, addTroca);
router.put('/updatroca', jwtUser, updateTroca);
router.delete('/deletetroca', jwtUser, deleteTroca);
router.get('listtrpca', jwtUser, listTroca);
router.get('gettroca', jwtUser, getTroca);
//----------------------------TROCA---------------------------

module.exports = router;