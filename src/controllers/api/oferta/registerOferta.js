const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const updateStone = require('../../../repositories/pedras/updatePedra');
const insertOferta = require('../../../repositories/ofertas/addOferta')

exports.addOferta = async (req, res) => {

    const userid = req.auth.id;
    const { id_troca, id_pedra, stone_img_url, stone_name } = req.body;

    try {
        const columns = {
            user_id: userid,
            pedra_id: id_pedra,
            troca_id: id_troca,
            stone_img_url: stone_img_url,
            stone_name: stone_name
        };
        console.log(columns);

        const respTroca = await insertOferta(columns);

        if (respTroca.err !== null) {
            console.log({ err: respTroca.err });

            res.status(500).send("Internal Server Error");
        } else {

            try {

                const respUpdate = await updateStone(columns);

                if (respUpdate.err !== null) {
                    console.log({ err: respUpdate.err });

                    res.status(500).send("Internal Server Error");
                } else {

                    res.status(200).json({ message: "Oferta criada." });

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
        res.sendError(errors, 501);
    }
};