const db = require("../../controllers/db");

async function searchUserID(params) {
    try {

        const query = `SELECT name, email, phone FROM "user" WHERE id = $1;`;
        const values = [params.id];

        const data = await db.query(query, values);

        if (data.rows.length === 0) {
            return { data: null, err: "Nenhum usuário encontrado" };
        }

        return { data: data.rows[0], err: null };

    } catch (err) {
        return { err: err };
    };
}

module.exports = searchUserID;