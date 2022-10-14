const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const getPedra = require('../../../repositories/pedras/getPedra');

exports.getPedra = async (req, res) => {

    // const userid = req.auth.id;
    const id = Number(req.params.id);

    // console.log(req.params.id)
    // return

    try {
        const columns = {
            id: id
        };

        console.log(columns);

        const resp = await getPedra(columns);

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