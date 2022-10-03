const Users = require('./users');
const Itens = require('./itens');
const Pictures = require('./pictures');
const Trades = require('./trades');
const Inventories = require('./inventories');

class Repositories {
    
    #users
    #itens
    #pictures
    #trades
    #inventories

    constructor(db) {
        this.#users = new Users(db);
        this.#itens = new Itens(db);
        this.#pictures = new Pictures(db);
        this.#trades = new Trades(db);
        this.#inventories = new Inventories(db);
    }

    get users() {
        return this.#users;
    }

    get itens() {
        return this.#itens;
    }

    get pictures() {
        return this.#pictures;
    }

    get trades() {
        return this.#trades;
    }

    get inventories() {
        return this.#inventories;
    }

    async begin(db) {
        try {
            const client = await db.connect();

            await client.query("BEGIN");
            return { client: client, err: null };
        } catch (err) {
            return { client: null, err: err };
        }
    }

    async commit(client) {
        try {
            await client.query("COMMIT");
            return { err: null };
        } catch (err) {
            return { client: null, err: err };
        }
    }

    async rollback(client) {
        try {
            await client.query("ROLLBACK");
            return { err: null };
        } catch (err) {
            return { err: err };
        }
    }
}

module.exports = Repositories;
