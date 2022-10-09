
const db = require("../../controllers/db");

async function insertPedra(params) {
    try {

        console.log(params);

        const query = `INSERT INTO stone (name, description, user_id, validated, offered, img_url) 
                VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const values = [params.name, params.description, params.user_id, params.validated, params.offered, params.img_url];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = insertPedra;