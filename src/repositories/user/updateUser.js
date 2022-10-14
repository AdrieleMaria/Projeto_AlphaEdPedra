const db = require("../../controllers/db");

async function updateUser(params) {
    try {

        const query = `UPDATE "user" SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *;`;
        const values = [params.name, params.email, params.phone, params.id];

        const result = await db.query(query, values);
        console.log("aqeddasadssda")
        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updateUser;