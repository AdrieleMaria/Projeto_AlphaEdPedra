const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const insertPedra = require('../../../repositories/pedras/listPedra');

exports.listPedra = async (req, res) => {

    //verificar:
    const userid = req.auth.id;
    const { name, description, user_id, created_at, img_url } = req.body;

    try {
        const resp = await listPedra(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
        } else {

            const pedraCreate = "criado";
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