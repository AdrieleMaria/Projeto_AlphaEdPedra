const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const putOfertas = require('../../../repositories/ofertas/putOfertas');

exports.putOferta = async (req, res) => {

    const userid = req.auth.id;

    const { idtroca, idPedraO } = req.body;

    try {
        const columns = {
            idTroca: idtroca,
            idPedraOffer: idPedraO,
            finished: 'true'
        };

        console.log(columns);

        const resp = await putOfertas(columns);

        if (resp.err !== null) {

            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");

        } else {

            console.log("putOfertas", resp.data)
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