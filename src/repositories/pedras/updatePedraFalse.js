const db = require("../../controllers/db");

async function updatePedraFalse(params) {
    try {

        const query = `UPDATE stone set offered='false' WHERE id=$1;`
        const values = [params.pedra_id];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updatePedraFalse;