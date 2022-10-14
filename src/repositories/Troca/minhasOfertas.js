
const db = require("../../controllers/db");

async function minhasOfertas(params) {
    try {
  
        const query = `select 
        "user".name as user_name, "user".phone, "user".email, "stone".id, "stone".name, "stone".description,  "stone".user_id, "stone".img_url  
        from "user" 
        inner join "stone" 
        on "user".id = user_id 
        INNER JOIN ofertas
        on stone_id = "stone".id 
        where troca_id = $1`;
        const values = [params.idTroca]

        const result = await db.query(query, values);
        console.log(result.rows)
        return { data: result.rows, err: null };
    } catch (err) {
        return { err: err };
    };
}

module.exports = minhasOfertas;