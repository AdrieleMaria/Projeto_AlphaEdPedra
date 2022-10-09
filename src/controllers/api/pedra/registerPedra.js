require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const insertPedra = require('../../../repositories/pedras/addPedra');
const upatePhotoPedra = require('../../../repositories/pedras/updatePhotoPedra');
const path = require('path');


exports.addPedra = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    const { photo } = req.files;
    const { name, description } = req.body;

    console.log(photo);
    console.log(name, description);

    const [, token] = req.headers.authorization.split(" ");
    const payload = jwt.verify(token);
    console.log(payload.id);

    const userid = payload.id;

    const columns = {
        name: name,
        description: description,
        user_id: userid,
        validated: 'false',
        offered: 'false',
        img_url: 'default.png'
    }

    const resp = await insertPedra(columns);

    try {

        if (resp.err !== null) {
            console.log({ err: resp.err });
            res.status(500).send({ message: "Internal Server Error" });

        } else {

            console.log(resp.data);
            //id do user dono
            console.log(resp.data.user_id);

            //id da pedra cadastrada
            console.log(resp.data.id);

            const id = resp.data.id;
            const uploadPath = path.join(__dirname, `../../../photoStone/photoStone-${id}.jpg`);

            //>>>>>>>>>>>>>>>>>>>>>>>ATENÇÃO!!!!!!<<<<<<<<<<<<<<<<<<<<
            const host = 'localhost';
            //>>>>>>>>>>>>>>>>>>>>>>>ATENÇÃO!!!!!!<<<<<<<<<<<<<<<<<<<<

            const columnsUpdate = {
                id: id,
                img_url: `http://${host}:${process.env.PORT}/photoStone/stonephoto-${id}.jpg`
            }

            const updateStone = await upatePhotoPedra(columnsUpdate);

            try {

                if (updateStone.err !== null) {
                    console.log({ err: resp.err });
                    res.status(500).send({ message: "Internal Server Error" });

                } else {

                    console.log(updateStone.data);
                    await photo.mv(uploadPath);
                    // res.status(201).send({ message: 'Foto atualizada com sucesso' });
                    res.status(200).json(updateStone.data);

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