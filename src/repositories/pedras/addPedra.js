const db = require("../controllers/db");

async function insertPedra(params) {
    try {

        // console.log(params);
        // console.log(params);

        const query = `INSERT INTO pedra (name, description, user_id, offer, validate) 
                VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [params.name, params.description, params.user_id, params.oferta, params.valid];

        const result = await db.query(query, values);
        console.log(result);

        return { err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = insertPedra;