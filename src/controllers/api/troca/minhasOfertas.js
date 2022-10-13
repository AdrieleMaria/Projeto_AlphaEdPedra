const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const getTroca = require('../../../repositories/Troca/minhasOfertas');

exports.minhasOfertas = async (req, res) => {

    const userid = req.params.id;

    try {
        const columns = {
            id : userid
        };

        const resp = await getTroca(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });
            res.status(500).send("Internal Server Error");
        } else {

            const pedraCreate = "get trocas";
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