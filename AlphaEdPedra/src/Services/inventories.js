const Repositories = require("../repositories/index.js");

class Inventories {

    #db
    #repositories

    constructor(db) {
        this.#db = db;
        this.#repositories = new Repositories();
    }

    async save(params) {
        const resp = await this.#repositories.inventories.insert(this.#db, params);

        if (resp.err !== null) {
            return { err: `saving inventories in the database: ${resp.err}` };
        }

        return { err: null };
    }

    async list(filters) {
        const resp = await this.#repositories.inventories.list(this.#db, filters);
        console.log("filters");
        if (resp.err !== null) {
            return { data: null, err: `listing inventories: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async getByID(id) {
        const resp = await this.#repositories.inventories.getByID(this.#db, id);

        if (resp.err !== null) {
            return { data: null, err: `listing inventories by id: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async update(id, params) {
        const resp = await this.#repositories.inventories.update(this.#db, id, params);

        if (resp.err !== null) {
            return { data: null, err: `updating inventories ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async updateStatus(id, status) {
        const resp = await this.#repositories.inventories.updateStatus(this.#db, id, status);

        if (resp.err !== null) {
            return { data: null, err: `updating inventories status ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async updateClassification(id, classification) {
        const resp = await this.#repositories.inventories.updateClassification(this.#db, id, classification);

        if (resp.err !== null) {
            return { data: null, err: `updating inventories classification ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async delete(id) {
        const resp = await this.#repositories.inventories.delete(this.#db, id);

        if (resp.err !== null) {
            return { data: null, err: `deleting inventories ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }
}

module.exports = Inventories;