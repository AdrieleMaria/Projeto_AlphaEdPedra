const db = require("../../controllers/db");
//>>>>>>>>>>>>>>>>>>OK
async function upatePhotoPedra(params) {
    try {

        console.log(params);

        const query = `UPDATE stone set img_url = $1 WHERE id = $2 RETURNING *;`;
        const values = [params.img_url, params.id];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = upatePhotoPedra;