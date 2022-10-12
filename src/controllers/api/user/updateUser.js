require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const updateUser = require('../../../repositories/user/updateUser');
//const updateEditPedra = require('../../../repositories/user/updteUser');
const path = require('path');

exports.updateUser = async (req, res) => {

    console.log("updateUser func")
    const userid = req.auth.id;
    const id = Number(req.params.id);
    const { name, email, phone } = req.body;

        try {
            const columns = {
                name: name,
                email: email,
                phone: phone,
                id: id
            };

            const resp = await updateUser(columns);
            
            if (resp.err !== null) {
                console.log({ err: resp.err });
                res.status(500).send("Internal Server Error");

            } else {
                const userCreate = "Atualizado";
                res.status(201).json(userCreate);
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