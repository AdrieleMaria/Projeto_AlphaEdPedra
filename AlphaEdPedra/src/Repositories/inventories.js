
class Trades {

    async insert(db, params) {
        try {

            const query = {
                text: `--sql
                INSERT INTO inventories 
                (display, user_id) 
                VALUES
                ($1, $2);
                `,
                values: [ params.display, params.user_id],
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
                    FROM inventories;
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
                    FROM inventories
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
                    UPDATE inventories
                    SET
                    display = $2,
                    user_id = $3
                    WHERE id = $1;
                `,
                values: [ id, params.display, params.user_id ],
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
                    DELETE FROM inventories
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

module.exports = Trades;