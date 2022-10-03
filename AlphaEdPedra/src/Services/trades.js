const Repositories = require("../repositories/index.js");

class Trades {

    #db
    #repositories

    constructor(db) {
        this.#db = db;
        this.#repositories = new Repositories();
    }

    async save(params) {
        const resp = await this.#repositories.trades.insert(this.#db, params);

        if (resp.err !== null) {
            return { err: `saving trades in the database: ${resp.err}` };
        }

        return { err: null };
    }

    async list(filters) {
        const resp = await this.#repositories.trades.list(this.#db, filters);
        console.log("filters");
        if (resp.err !== null) {
            return { data: null, err: `listing trades: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async getByID(id) {
        const resp = await this.#repositories.trades.getByID(this.#db, id);

        if (resp.err !== null) {
            return { data: null, err: `listing trades by id: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async update(id, params) {
        const resp = await this.#repositories.trades.update(this.#db, id, params);

        if (resp.err !== null) {
            return { data: null, err: `updating trades ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async updateStatus(id, status) {
        const resp = await this.#repositories.trades.updateStatus(this.#db, id, status);

        if (resp.err !== null) {
            return { data: null, err: `updating trades status ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async updateClassification(id, classification) {
        const resp = await this.#repositories.trades.updateClassification(this.#db, id, classification);

        if (resp.err !== null) {
            return { data: null, err: `updating trades classification ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async delete(id) {
        const resp = await this.#repositories.trades.delete(this.#db, id);

        if (resp.err !== null) {
            return { data: null, err: `deleting trades ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }
}

module.exports = Trades;