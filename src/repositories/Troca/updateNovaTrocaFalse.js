const db = require("../../controllers/db");

async function updateNovaTrocaFalse(params) {
    try {

        const query = `UPDATE nova_troca set offer='false' WHERE id=$1;`;
        const values = [params.idtroca];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updateNovaTrocaFalse;