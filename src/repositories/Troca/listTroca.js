const db = require("../../controllers/db");

//usado em listOferta
//lista todas as trocas da tabela nova_troca com conclusão falsa
async function listTroca() {

    try {

        const query = `SELECT * FROM nova_troca WHERE finished='false';`;
        const data = await db.query(query);
        console.log(data);

        return { data: data.rows, err: null };
    } catch (err) {
        return { data: null, err: err };
    };
}

module.exports = listTroca;