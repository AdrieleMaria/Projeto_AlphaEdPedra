const db = require("../../controllers/db");

async function getTrocas(params) {
    try {

        const query = `SELECT * FROM nova_troca WHERE id = $1;`;
        const values = [params.id];
        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = getTrocas;