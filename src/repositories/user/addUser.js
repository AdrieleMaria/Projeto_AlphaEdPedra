const db = require("../../controllers/db");

async function insert(params) {
    try {

        // console.log(params);
        // console.log(params);
        // console.log(params.name);

        const query = `INSERT INTO "user" (name, phone, email, password, type) 
                VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [params.name, params.phone, params.email, params.password, params.type];

        const result = await db.query(query, values);
        console.log(result);

        return {data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = insert;