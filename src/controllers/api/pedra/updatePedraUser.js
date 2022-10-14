const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const updateDbPedraUser = require('../../../repositories/pedras/updatePedraUser');

exports.updatePedraUser = async (req, res) => {

    try {

        const userid = req.auth.id;
        const { idPedraO, idUserO, idPedraL } = req.body;
        const troca = {
            idPedra: idPedraO,
            idUser: userid,
            offered: 'false'
        }

        console.log("troca", troca);

        const troca2 = {
            idPedra: idPedraL,
            idUser: idUserO,
            offered: 'false'
        }
        console.log("troca", troca2);

        const resp = await updateDbPedraUser(troca);

        if (resp.err !== null) {
            console.log({ err: resp.err });
            res.status(500).send("Internal Server Error");
        } else {
            try {
                const resp = await updateDbPedraUser(troca2);

                if (resp.err !== null) {
                    console.log({ err: resp.err });
                    res.status(500).send("Internal Server Error");
                } else {

                    res.status(201).json(resp);
                }

            } catch (err) {
                errors = {
                    message: 'Ocorreu um erro inesperado.',
                    code: 500,
                    detail: { ...err },
                };
                res.send(errors, 501);
            }
        }

    } catch (err) {
        errors = {
            message: 'Ocorreu um erro inesperado.',
            code: 500,
            detail: { ...err },
        };
        res.send(errors, 501);
    }
};