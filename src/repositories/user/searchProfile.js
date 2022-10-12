const db = require("../../controllers/db");

async function searchProfile(params) {
    try {
        //PESQUISAR NO BANCO:

        const query = `SELECT name, email, phone FROM "user" WHERE name LIKE '%'||$1||'%' AND type = 'user'`;
        const values = [params.name];

        const data = await db.query(query, values);

        if (data.rows.length === 0) {
            // console.log("data rows >>>>", data.rows);
            return { data: null, err: "Nenhum usuário encontrado" };
        }

        return { data: data.rows, err: null };

    } catch (err) {
        return { err: err };
    };
}

module.exports = searchProfile;