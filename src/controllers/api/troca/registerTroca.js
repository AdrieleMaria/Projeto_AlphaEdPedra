const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const insertTroca = require('../../../repositories/Troca/addTroca');
const updateStone = require('../../../repositories/pedras/updatePedra');

exports.addTroca = async (req, res) => {

    const userid = req.auth.id;
    const { id_pedra, desejo, img_url, stone_name } = req.body;

    try {
        const columns = {
            user_id: userid,
            pedra_id: id_pedra,
            desejo: desejo,
            img_url: img_url,
            stone_name: stone_name,
            offered: 'true'
        };
        console.log(columns);

        const respTroca = await insertTroca(columns);

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
        res.send(errors, 501);
    }
};