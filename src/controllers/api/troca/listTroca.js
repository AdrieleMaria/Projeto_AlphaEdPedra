const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const listTroca = require('../../../repositories/Troca/listTroca');

exports.listTroca = async (req, res) => {

    //verificar:
    const userid = req.auth.id;
    const { name, description, user_id, created_at, img_url } = req.body;

    try {
        const resp = await listTroca(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
        } else {

            const pedraCreate = "list troca";
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