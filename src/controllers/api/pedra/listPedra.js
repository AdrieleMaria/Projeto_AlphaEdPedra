const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const listStone = require('../../../repositories/pedras/listPedra');

exports.listPedra = async (req, res) => {

    const [, token] = req.headers.authorization.split(" ");
    const payload = jwt.verify(token);
    console.log(payload.id);

    const userid = payload.id;
    const columns = { user_id: userid };

    try {
        const resp = await listStone(columns);

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