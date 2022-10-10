const db = require("../../controllers/db");

async function updateDbPedra(params) {
    try {

        console.log(params);

        const query = `UPDATE stone set name=$1, description=$2 WHERE id=$3 RETURNING *;`;
        const values = [params.name, params.description, params.id];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updateDbPedra;