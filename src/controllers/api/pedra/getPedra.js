const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const getPedra = require('../../../repositories/pedras/getPedra');

exports.getPedra = async (req, res) => {

    //verificar:
    const userid = req.auth.id;

    try {
        const columns = {
            id : userid
        };
        console.log(columns);

        const resp = await getPedra(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
        } else {

            const pedraCreate = "get pedra";
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