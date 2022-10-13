const db = require("../../controllers/db");

async function updatePedra(params) {
    try {

        const query = `UPDATE stone set offered=$1 WHERE id=$2 RETURNING *;`;
        const values = [params.offered, params.pedra_id];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updatePedra;