const db = require("../../controllers/db");

async function getUser(params) {
    try {

        // const [, token] = req.headers.authorization.split(" ");
        // const payload = jwt.verify(token);
        //console.log(params.id);
    
        // const userid = payload.id;
        // const columns = { user_id: userid };    

        const query = `SELECT * FROM "user" WHERE id = $1;`;
        const values = [params.id];

        const data = await db.query(query, values);

        if (data.rows.length === 0) {
            return { data: null, err: null };
        }
    
        //console.log({ data: data.rows[0]})

        return { data: data.rows[0]};

    } catch (err) {

        return { err: err };

    };
}

module.exports = getUser;