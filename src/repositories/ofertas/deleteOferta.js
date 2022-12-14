const db = require("../../controllers/db");

async function deleteOffer(params) {
    try {

        const query = `DELETE FROM ofertas WHERE troca_id = $1`;
        const values = [params.idtroca];

        const result = await db.query(query, values);
        console.log(result);

        return { err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = deleteOffer;