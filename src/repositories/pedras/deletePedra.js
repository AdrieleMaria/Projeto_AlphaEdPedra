
const db = require("../../controllers/db");

async function deletePedra(params) {
    try {

        // console.log(params);
        // console.log(params);

        const query = `DELETE FROM pedra WHERE id = $1 RETURNING *`;
        const values = [params.id];

        const result = await db.query(query, values);
        console.log(result);

        return { err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = deletePedra;