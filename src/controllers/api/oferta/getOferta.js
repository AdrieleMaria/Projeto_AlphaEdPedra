const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const getOfertas = require('../../../repositories/ofertas/getOferta');

exports.getOferta = async (req, res) => {

    const userid = req.auth.id;

    try {
        const columns = {
            user_id: userid
        };

        console.log(columns);

        const resp = await getOfertas(columns);

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