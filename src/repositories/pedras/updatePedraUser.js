const db = require("../../controllers/db");

async function updateDbPedraUser(params) {
    try {

        const query = `UPDATE stone SET user_id=$2, offered=$3 WHERE id=$1;`;
        const values = [params.idPedra, params.idUser, params.offered];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updateDbPedraUser;