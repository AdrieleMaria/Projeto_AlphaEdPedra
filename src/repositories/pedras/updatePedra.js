const db = require("../../controllers/db");

async function updatePedra(params) {
    try {

        const query = `UPDATE stone set offered='true' WHERE id=$1;`
        const values = [params.pedra_id];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updatePedra;