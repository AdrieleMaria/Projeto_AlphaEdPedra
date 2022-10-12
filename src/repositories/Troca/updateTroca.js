
const db = require("../../controllers/db");

async function updateTroca(params) {
    try {
        
        const query = `UPDATE troca SET
        name = $1
        description = $2
        user_id = $3
        created_at = $4
        img_url = $5
        WHERE id = $6
        RETURNING *`;
        const values = [params.name, params.description, params.user_id, params.oferta, params.valid, params.user_id];

        const result = await db.query(query, values);
        console.log(result);

        return { err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updateTroca;