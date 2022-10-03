const Repositories = require("../repositories/index.js");

class Pictures {

    #db
    #repositories

    constructor(db) {
        this.#db = db;
        this.#repositories = new Repositories();
    }

    async save(params) {
        const resp = await this.#repositories.pictures.insert(this.#db, params);

        if (resp.err !== null) {
            return { err: `saving pictures in the database: ${resp.err}` };
        }

        return { err: null };
    }

    async list(filters) {
        const resp = await this.#repositories.pictures.list(this.#db, filters);
        console.log("filters");
        if (resp.err !== null) {
            return { data: null, err: `listing pictures: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async getByID(id) {
        const resp = await this.#repositories.pictures.getByID(this.#db, id);

        if (resp.err !== null) {
            return { data: null, err: `listing pictures by id: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async update(id, params) {
        const resp = await this.#repositories.pictures.update(this.#db, id, params);

        if (resp.err !== null) {
            return { data: null, err: `updating pictures ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async updateStatus(id, status) {
        const resp = await this.#repositories.pictures.updateStatus(this.#db, id, status);

        if (resp.err !== null) {
            return { data: null, err: `updating pictures status ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async updateClassification(id, classification) {
        const resp = await this.#repositories.pictures.updateClassification(this.#db, id, classification);

        if (resp.err !== null) {
            return { data: null, err: `updating pictures classification ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }

    async delete(id) {
        const resp = await this.#repositories.pictures.delete(this.#db, id);

        if (resp.err !== null) {
            return { data: null, err: `deleting pictures ${id}: ${resp.err}` };
        }

        return { data: resp.data, err: null };
    }
}

module.exports = Pictures;