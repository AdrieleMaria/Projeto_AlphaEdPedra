const db = require("../../controllers/db");

async function insertOferta(params) {
    try {
        const query = `INSERT INTO ofertas (user_id, troca_id, stone_id, stone_img_url, stone_name) VALUES ($1, $2, $3, $4, $5);`;
        const values = [params.user_id, params.troca_id, params.pedra_id, params.stone_img_url, params.stone_name];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = insertOferta;