const db = require("../../controllers/db");

async function getOfertas(params) {
    try {

        const query = `SELECT * FROM "ofertas" WHERE user_id = $1`;
        const values = [params.user_id];

        const result = await db.query(query, values);

        console.log(result);

        return { data: result.rows, err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = getOfertas;