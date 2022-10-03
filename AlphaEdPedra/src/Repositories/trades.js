
class Trades {

    async insert(db, params) {
        try {

            console.log(params);

            const query = {
                text: `--sql
                INSERT INTO trades
                (item_required_id, item_offer_id, user_create_id, created_at, type) 
                VALUES
                ($1, $2, $3, $4, $5);
                `,
                values: [ params.item_required_id, params.item_offer_id, params.user_create_id, params.created_at, params.type],
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
                    FROM trades;
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
                    FROM trades
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
                    UPDATE trades
                    SET
                        item_required_id = $2, 
                        item_offer_id = $3, 
                        user_create_id = $4,
                        user_accept_id = $5, 
                        created_at = $6, 
                        type = $7,
                        closed = $8,
                        closed_at = $9
                    WHERE id = $1
                `,
                values: [id, params.item_required_id, params.item_offer_id, params.user_create_id, params.user_accept_id, params.created_at, params.type, params.closed, params.closed_at],
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
                    DELETE FROM trades
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