const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const deleteTroca = require('../../../repositories/Troca/deleteTroca');

exports.deleteTroca = async (req, res) => {

    //verificar:
    const userid = req.auth.id;

    try {
        const columns = {
            id : userid
        };
        console.log(columns);

        const resp = await deleteTroca(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
        } else {

            const pedraCreate = "get Troca";
            res.status(201).json(pedraCreate);
        }

    } catch (err) {
        console.log(err);
        errors = {
            message: 'Ocorreu um erro inesperado.',
            code: 500,
            detail: { ...err },
        };
        res.sendError(errors, 501);
    }
};