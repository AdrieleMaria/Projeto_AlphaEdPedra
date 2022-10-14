const db = require("../../controllers/db");

async function insertTroca(params) {
    try {
        const query = `INSERT INTO nova_troca (stone_id, user_id, wish, img_url, stone_name, finished, offer) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
        const values = [params.pedra_id, params.user_id, params.desejo, params.img_url, params.stone_name, params.finished, params.offer];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = insertTroca;