
const db = require("../../controllers/db");

async function minhasTrocas(params) {
    try {

        const query = `SELECT * FROM nova_troca WHERE user_id = $1`;
        const values = [params.id]

        const result = await db.query(query, values);
        console.log(result.rows)

        return { data: result.rows, err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = minhasTrocas;