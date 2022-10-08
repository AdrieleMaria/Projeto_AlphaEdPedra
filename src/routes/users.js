// const express = require('express');
// const router = express.Router();

// const userAuth = require('../auth/userAuth');
// const login = require('../controllers/api/session/login');
// const addUser = require('../controllers/api/user/registerUser');
// const listPedras = require('../controllers/api/pedras/listPedras');
// const listUser = require('../controllers/api/user/listUser');
// const deleteUser = require('../controllers/api/user/deleteUsers');
// const updateUserData = require('../controllers/api/user/updateUserData');
// const logout = require('../controllers/api/session/logout');

//----------------------------USER ROUTES----------------------------
// router.get('/login', login); //user e admin | criação de token
// router.post('/register', addUser);  //user e admin | criação de token
// router.get('/inventories/:id', userAuth , listPedras); //user | verificação de token | listar pedras do usuario
// router.get('/user/:id', userAuth , listUser); //user | verificação de token | perfil do usuario
// router.delete('/deleteuser/:id', jwtuser, deleteUser); //user | verificação de token | deletar usuário
// router.put('/update-userdata', jwtuser, updateUserData); //user | verificação de token | editar dados
// router.post('/logout', logout);
//----------------------------USER ROUTES----------------------------

// module.exports = router;