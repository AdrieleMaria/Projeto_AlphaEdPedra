
const db = require("../../controllers/db");

async function minhasOfertas(params) {
    try {
        //const query = `SELECT * FROM ofertas WHERE troca_id = $1`;
        const query = `select 
        "user".name as user_name, "user".phone, "user".email, "stone".name, "stone".description, "stone".img_url  
        from "user" 
        inner join "stone" 
        on "user".id = user_id 
        INNER JOIN ofertas
        on stone_id = "stone".id 
        where troca_id = $1`;
        const values = [ params.id ]

        const result = await db.query(query, values);
        console.log(result.rows)
        return { data: result.rows, err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = minhasOfertas;