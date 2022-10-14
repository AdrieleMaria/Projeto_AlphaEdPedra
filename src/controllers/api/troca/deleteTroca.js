const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const deleteTroca = require('../../../repositories/Troca/deleteTroca');

exports.deleteTroca = async (req, res) => {

    const idtroca = Number(req.params.idtroca);

    try {
        const columns = {
            id: idtroca
        };
        console.log(columns);

        const resp = await deleteTroca(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
        } else {
            res.status(201).json(resp);
        }

    } catch (err) {
        console.log(err);
        errors = {
            message: 'Ocorreu um erro inesperado.',
            code: 500,
            detail: { ...err },
        };
        res.send(errors, 501);
    }
};