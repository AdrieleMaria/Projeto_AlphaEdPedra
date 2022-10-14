const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const listTroca = require('../../../repositories/Troca/listTroca');

//>>>>>>>>>>>>>>>>>>>>>>>ok!
exports.listOferta = async (req, res) => {

    const userid = req.auth.id;

    try {
        const resp = await listTroca();

        if (resp.err !== null) {

            console.log({ err: resp.err });
            res.status(500).send("Internal Server Error");


        } else {

            return res.status(200).json({ id_user: userid, data: resp.data });

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