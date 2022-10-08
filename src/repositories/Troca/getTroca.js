
const db = require("../../controllers/db");

async function getTrocas(params) {
    try {

        // console.log(params);
        // console.log(params);

        const query = `SELECT * FROM troca WHERE id = $1
        RETURNING *`;
        values [ params.user_id ]
        const result = await db.query(query, values);
        console.log(result);

        return { err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = getTrocas;