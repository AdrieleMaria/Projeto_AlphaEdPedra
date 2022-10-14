const db = require("../../controllers/db");

async function updateNovaTroca(params) {
    try {

        const query = `UPDATE nova_troca set offer='true' WHERE id=$1;`;
        const values = [params.troca_id];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updateNovaTroca;



