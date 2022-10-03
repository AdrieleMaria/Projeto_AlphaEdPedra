
class Users {

    async insert(db, params) {
        try {

            console.log(params);

            const query = {
                text: `--sql
                INSERT INTO users 
                (name, login, email, password, type, created_at, last_login) 
                VALUES
                ($1, $2, $3, $4, $5, $6, $7);
                `,
                values: [ params.name, params.login, params.email, params.password, params.type, params.created_at, params.last_login ],
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
            where += `WHERE name LIKE '%' || $${values.length + 1} || '%'`;
            values.push(filters.name);
        };

        try {
            const query = {
                text: `--sql
                    SELECT *
                    FROM users
                    ${where};
                `,
                values: values,
            };

            console.log(query)

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
                    SELECT name, login, email, password, type, created_at, last_login
                    FROM users
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
                    UPDATE users
                    SET
                        name = $2,    
                        login = $3,    
                        email = $4,    
                        password = $5,  
                        type = $6,       
                        created_at = $7,
                        last_login = $8
                    WHERE id = $1;
                `,
                values: [ id, params.name, params.login, params.email, params.password, params.type, params.created_at, params.last_login ],
            };

            await db.query(query);
            return { err: null };
        } catch (err) {
            return { err: err };
        };
    }

    async updateStatus(db, id, status) {
        try {
            const query = {
                text: `--sql
                    UPDATE users
                    SET
                        active = $2,
                        updated_at = now()
                    WHERE id = $1;
                `,
                values: [ id, status ],
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
                    DELETE FROM users
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

module.exports = Users;