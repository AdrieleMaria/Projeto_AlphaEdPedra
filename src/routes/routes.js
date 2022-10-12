const express = require('express');
const router = express.Router();

const jwtUser = require('../auth/userAuth');

const { login } = require('../controllers/api/session/login');
const { addUser } = require('../controllers/api/user/registerUser');
const { searchEmail } = require('../controllers/api/user/searchUserEmail');
const { logout } = require('../controllers/api/session/logout');

const { getUser } = require('../controllers/api/user/getUser');
const { getProfileEdit } = require('../controllers/api/user/getProfileEdit');
const { updateUser } = require('../controllers/api/user/updateUser');
const { deleteUser } = require('../controllers/api/user/deleteUser');

const { searchProfile } = require('../controllers/api/user/searchProfile');

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
const { listOferta } = require('../controllers/api/troca/listOferta');

//----------------------------USER----------------------------
router.post('/login', login); //user e admin | criação de token
router.post('/register', searchEmail, addUser);  //user e admin | criação de token
// router.put('/update-userdata', jwtuser, updateUserData); //user | verificação de token | editar dados
// router.post('/logout', logout);
router.get('/profile', jwtUser, getUser);

//----------------------------SEARCH----------------------------
router.get('/searchprofile/:name', jwtUser, searchProfile);
router.get('/editar-perfil', jwtUser, getProfileEdit);
router.put('/updateUser/:id', jwtUser, updateUser)
router.delete('/deleteUser/:id', jwtUser, deleteUser);
//----------------------------USER----------------------------

//----------------------------PEDRA---------------------------
router.post('/addpedra', jwtUser, addPedra);
router.put('/updatePedra/:id', jwtUser, updatePedra);
router.delete('/deletepedra/:id', jwtUser, deletePedra);
router.get('/listpedra', jwtUser, listPedra);
router.get('/getpedra/:id', jwtUser, getPedra);
//----------------------------PEDRA---------------------------

//----------------------------TROCA---------------------------
router.post('/addtroca', jwtUser, addTroca);
router.put('/updatroca', jwtUser, updateTroca);
router.delete('/deletetroca', jwtUser, deleteTroca);
router.get('/listtroca', jwtUser, listTroca);
router.get('/gettroca', jwtUser, getTroca);

router.get('/listofertas', jwtUser, listOferta);
//----------------------------TROCA---------------------------


module.exports = router;