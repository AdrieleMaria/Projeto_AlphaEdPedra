const db = require("../../controllers/db");

async function putOfertas(params) {
    try {

        const query = `UPDATE ofertas set finished=$2 WHERE troca_id=$1 RETURNING *;`;
        const values = [params.idTroca, params.finished];

        const result = await db.query(query, values);

        console.log(result);

        return { data: result.rows, err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = putOfertas;