const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const getOfertaTrocas = require('../../../repositories/ofertas/validOfertaTroca');

exports.getOfertaTroca = async (req, res) => {

    const idtroca = Number(req.params.idtroca);
    const idPedra = Number(req.params.idPedra);
    // const userid = req.auth.id;

    try {
        const columns = {
            idTroca: idtroca,
            idPedraOffer: idPedra,
            finished: 'true'
        };

        console.log(columns);

        const resp = await getOfertaTrocas(columns);

        if (resp.err !== null) {

            // console.log({ err: resp.err });
            res.status(500).send("Internal Server Error");

        } else {

            try {
        
                const resp = await getOfertaTrocas(columns);
        
                if (resp.err !== null) {
        
                    // console.log({ err: resp.err });
                    res.status(500).send("Internal Server Error");
        
                } else {
        
                    // console.log("putOfertas", resp.data)
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