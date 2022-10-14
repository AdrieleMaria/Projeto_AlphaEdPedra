const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const searchUserID = require('../../../repositories/user/searchProfileID');

exports.searchProfileID = async (req, res) => {

    const searchID = req.params.id;

    try {
        const columns = {
            id: searchID
        };

        const resp = await searchUserID(columns);

        if (resp.err !== null) {

            res.status(500).send("Nenhum usuário encontrado");

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
        res.send(errors, 501);
    }
};
