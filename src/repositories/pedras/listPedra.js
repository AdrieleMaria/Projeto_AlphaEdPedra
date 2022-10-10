const db = require("../../controllers/db");
//>>>>>>>>>>>>>>>>>>OK
async function listStone(params) {
    try {

        const query = `SELECT id, name, description, user_id, img_url, created_at, validated, offered 
        FROM "stone" WHERE user_id = $1`;
        const values = [params.user_id];

        const data = await db.query(query, values);
        console.log(data);

        return { data: data.rows, err: null };
    } catch (err) {
        return { data: null, err: err };
    };
}

module.exports = listStone;