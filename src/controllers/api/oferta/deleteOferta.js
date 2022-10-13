const deleteOffer = require('../../../repositories/ofertas/deleteOferta');
const updateStone = require('../../../repositories/pedras/updatePedra');

exports.deleteOferta = async (req, res) => {

    const id_Offer = Number(req.params.idOffer);
    const id_stone = Number(req.params.idStone);

    try {
        const columns = {
            idOffer: id_Offer,
            pedra_id: id_stone,
            offered: 'false'
        };
        console.log(columns);

        const resp = await deleteOffer(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
        } else {

            try {

                const respUpdate = await updateStone(columns);

                if (respUpdate.err !== null) {
                    console.log({ err: respUpdate.err });

                    res.status(500).send("Internal Server Error");
                } else {

                    res.status(200).json({ message: "Oferta cancelada." });

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