// const bcrypt = require('bcrypt');
// const jwt = require('../../../auth/jwt');
// const updateTroca = require('../../../repositories/Troca/updateTrocaPedra');

// exports.updateTrocaPedra = async (req, res) => {
    
//     const userid = req.auth.id;
//     const { idPedra, idUser, idPedraUserLog } = req.body;

//     try {
//         const columns = {
//             idPedra: idPedra,
//             idUser: idUser,
//             userid: userid,
//             idPedraUserLog: idPedraUserLog
//         };
//         console.log(columns);

//         const resp = await updateDbPedraUser(columns);

//         if (resp.err !== null) {
//             console.log({ err: resp.err });
//             res.status(500).send("Internal Server Error");
//         } else {

//             res.status(201).json();
//         }

//     } catch (err) {
//         console.log(err);
//         errors = {
//             message: 'Ocorreu um erro inesperado.',
//             code: 500,
//             detail: { ...err },
//         };
//         res.send(errors, 501);
//     }

// };