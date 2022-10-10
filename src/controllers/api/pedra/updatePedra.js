require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const updateDbPedra = require('../../../repositories/pedras/updateDataPedra');
const updateEditPedra = require('../../../repositories/pedras/updateEditPedra');
const path = require('path');

exports.updatePedra = async (req, res) => {

    console.log("updatePedra func")
    const userid = req.auth.id;
    const id = Number(req.params.id);
    const { name, description } = req.body;
    const { photo } = req.files;

    console.log("Consolleeeeeee", userid, id, name, description);

    if (!req.files || Object.keys(req.files).length === 0) {

        try {
            const columns = {
                name: name,
                description: description,
                id: id
            };
            console.log(columns);

            const resp = await updateDbPedra(columns);

            if (resp.err !== null) {
                console.log({ err: resp.err });

                res.status(500).send("Internal Server Error");
            } else {

                const pedraCreate = "Atualizado";
                res.status(201).json(pedraCreate);
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


    } else {

        console.log("caso foto enviada");

        try {

            const uploadPath = path.join(__dirname, `../../../photoStone/stonephoto-${id}.jpg`);

            const host = 'localhost';

            const columns = {
                name: name,
                description: description,
                id: id,
                img_url: `http://${host}:${process.env.PORT}/photoStone/stonephoto-${id}.jpg`
            };

            console.log(columns);

            const resp = await updateEditPedra(columns);

            if (resp.err !== null) {
                console.log({ err: resp.err });
                res.status(500).send("Internal Server Error");
            } else {

                console.log(resp.data);
                await photo.mv(uploadPath);
                res.status(200).json(resp.data);
                // const pedraCreate = "criado";
                // res.status(201).json(pedraCreate);
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

};