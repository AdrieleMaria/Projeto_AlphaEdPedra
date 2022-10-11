const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const deletePedra = require('../../../repositories/pedras/deletePedra');

exports.deletePedra = async (req, res) => {

    //verificar:
    const id = Number(req.params.id);

    try {
        const columns = {
            id : id
        };
        console.log(columns);

        const resp = await deletePedra(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
        } else {

            const pedraCreate = "delete pedra";
            res.status(201).json(pedraCreate);
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