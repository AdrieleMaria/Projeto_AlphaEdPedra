const db = require("../../controllers/db");

async function updateEditPedra(params) {
    try {

        console.log(params);

        const query = `UPDATE stone set name=$1, description=$2, img_url=$3 WHERE id=$4 RETURNING *;`;
        const values = [params.name, params.description, params.img_url, params.id];

        const result = await db.query(query, values);
        console.log(result);

        return { data: result.rows[0], err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = updateEditPedra;