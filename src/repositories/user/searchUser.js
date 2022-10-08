const db = require("../../controllers/db");

async function searchUser(params) {
    try {

        // console.log("search User db params", params);

        //VERIFICAR ESSA CHAMADA:

        const query = `SELECT email, password, phone, type, id FROM "user" WHERE email= $1;`;
        const values = [params.email];

        const data = await db.query(query, values);
        // console.log("data search user >>>>", data);
        // console.log("data.rows.length  >>>>", data.rows.length);

        if (data.rows.length === 0) {
            // console.log("data rows >>>>", data.rows);
            return { data: null, err: null };
        }

        return { data: data.rows[0], err: "Usuario já cadastrado" };

    } catch (err) {

        return { err: err };

    };
}

module.exports = searchUser;