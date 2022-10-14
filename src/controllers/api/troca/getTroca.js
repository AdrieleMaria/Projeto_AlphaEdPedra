const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const getTroca = require('../../../repositories/Troca/getTroca');

exports.getTroca = async (req, res) => {

    const id = Number(req.params.id);

    try {
        const columns = {
            id: id
        };
        console.log(columns);

        const resp = await getTroca(columns);

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
        res.sendError(errors, 501);
    }
};