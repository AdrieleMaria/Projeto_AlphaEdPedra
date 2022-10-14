const db = require("../../controllers/db");

async function listTroca() {

    try {

        const query = `SELECT * FROM nova_troca WHERE finished='false' and offer='false';`;
        const data = await db.query(query);
        console.log(data);

        return { data: data.rows, err: null };
    } catch (err) {
        return { data: null, err: err };
    };
}

module.exports = listTroca;