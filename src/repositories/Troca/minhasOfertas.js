
const db = require("../../controllers/db");

async function minhasOfertas(params) {
    try {
        const query = `SELECT * FROM ofertas WHERE troca_id = $1`;
        const values = [ params.id ]
        
        console.log("result.rows")
        
        const result = await db.query(query, values);
        console.log(result.rows)
        return { data: result.rows, err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = minhasOfertas;