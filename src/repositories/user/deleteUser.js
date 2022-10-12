
const db = require("../../controllers/db");

async function deletePedra(params) {
    try {

        const query = `DELETE FROM user WHERE id = $1 RETURNING *`;
        const values = [params.id];

        const result = await db.query(query, values);
        console.log(result);

        return { err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = deletePedra;