const Repositories = require("../repositories/index.js");

class Itens {

    #db
    #repositories

    constructor(db) {
        this.#db = db;
        this.#repositories = new Repositories();
    }

    async save(params) {
        const resp = await this.#repositories.itens.insert(this.#db, params);

        if (resp.err !== null) {
            return { err: `saving itens in the database: ${resp.err}` };
        }

        return { err: null };
    }

    async list(filters) {
        const resp = await this.#repositories.itens.list(this.#db, filters);
        console.log("filters");
        if (resp.err !== null) {
            return { data: null, err: `listing itens: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async getByID(id) {
        const resp = await this.#repositories.itens.getByID(this.#db, id);

        if (resp.err !== null) {
            return { data: null, err: `listing itens by id: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async update(id, params) {
        const resp = await this.#repositories.itens.update(this.#db, id, params);

        if (resp.err !== null) {
            return { data: null, err: `updating itens ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async delete(id) {
        const resp = await this.#repositories.itens.delete(this.#db, id);

        if (resp.err !== null) {
            return { data: null, err: `deleting itens ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }
}

module.exports = Itens;