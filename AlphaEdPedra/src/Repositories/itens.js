
class Itens {

    async insert(db, params) {
        try {

            console.log(params);

            const query = {
                text: `--sql
                INSERT INTO itens 
                (name, description, created_at, user_id) 
                VALUES
                ($1, $2, $3, $4);
                `,
                values: [ params.name, params.description, params.created_at, params.user_id],
            };

            await db.query(query);
            return { err: null };
        } catch (err) {
            return { err: err };
        };
    }

    async list(db, filters) {
        let where = "";
        let values = [];

        if (filters.name !== "") {
            where += " ";
            where += `AND name LIKE '%' || $${values.length + 1} || '%'`;
            values.push(filters.name);
        };

        try {
            const query = {
                text: `--sql
                    SELECT *
                    FROM itens;
                `,
                values: values,
            };

            const data = await db.query(query);
            return { data: data.rows, err: null };
        } catch (err) {
            return { data: null, err: err };
        };
    }

    async getByID(db, id) {
        try {
            const query = {
                text: `--sql
                    SELECT *
                    FROM itens
                    WHERE id = $1;
                `,
                values: [ id ],
            };

            const data = await db.query(query);

            if (data.rows.length === 0) {
                return { data: data.rows, err: "user not found" };
            }

            return { data: data.rows[0], err: null };
        } catch (err) {
            return { data: null, err: err };
        };
    }

    async update(db, id, params) {
        try {
            const query = {
                text: `--sql
                    UPDATE itens
                    SET
                        name = $2,
                        description = $3,
                        created_at = $4,
                        user_id = $5
                    WHERE id = $1;
                `,
                values: [ id, params.name, params.description, params.created_at, params.user_id ],
            };

            await db.query(query);
            return { err: null };
        } catch (err) {
            return { err: err };
        };
    }

    async delete(db, id) {
        try {
            const query = {
                text: `--sql
                    DELETE FROM itens
                    WHERE id = $1;
                `,
                values: [ id ],
            };

            await db.query(query);
            return { err: null };
        } catch (err) {
            return { err: err };
        };
    }
}

module.exports = Itens;