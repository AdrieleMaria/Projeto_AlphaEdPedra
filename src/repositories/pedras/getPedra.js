const db = require("../../controllers/db");

async function getPedra(params) {
    try {

        console.log(params.id);

        const query = `SELECT name, description, img_url 
        FROM "stone" WHERE id = $1`;
        const values = [params.id];

        const result = await db.query(query, values);

        console.log(result);

        return { data: result.rows, err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = getPedra;