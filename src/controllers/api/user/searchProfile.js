const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const searchProfile = require('../../../repositories/user/searchProfile');

exports.searchProfile = async (req, res) => {

    const searchFor = req.params.name;

    try {
        const columns = {
            name: searchFor
        };

        const resp = await searchProfile(columns);

        /* if (resp.err !== null) {
            res.status(500).send("Nenhum usuário encontrado");
        } else { */
            res.status(201).json(resp);
        /* } */

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
