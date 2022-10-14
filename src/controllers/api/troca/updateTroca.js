const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const updateTroca = require('../../../repositories/Troca/updateTroca');

exports.updateTroca= async (req, res) => {

    //verificar:
    const userid = req.auth.id;
    const { name, description, user_id, img_url } = req.body;

    try {
        const columns = {
            name: name,
            description: description,
            user_id: userid,
            img_url: img_url
        };
        console.log(columns);

        const resp = await updateTroca(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
        } else {

            const pedraCreate = "update troca";
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