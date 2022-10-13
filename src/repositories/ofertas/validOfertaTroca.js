const db = require("../../controllers/db");

async function getOfertaTrocas(params) {
    try {

        const query = `SELECT * FROM ofertas WHERE finished=$3 and troca_id=$1;`;
        const values = [params.idTroca, params.idPedraOffer, params.finished];

        const result = await db.query(query, values);

        console.log(result);

        return { data: result.rows, err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = getOfertaTrocas;