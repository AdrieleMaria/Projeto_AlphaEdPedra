
const db = require("../../controllers/db");

async function listPedra(params) {
    try {

        // console.log(params);
        // console.log(params);

        const query = `SELECT * FROM pedra
        RETURNING *`;

        const result = await db.query(query, values);
        console.log(result);

        return { err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = listPedra;