
class InventoriesHandlers {

    #app

    constructor(app) {
        this.#app = app;
    }

    async save(req, res) {

        const display = req.body.display;
        const user_id = req.body.user_id;

        const params = { 
            display     : display, 
            user_id     : user_id, 
        };

        const resp = await this.#app.inventories.save(params);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(201).end();
        return false;
    }

    async list(req, res) {

        const name = req.query.name || "";

        if (typeof name !== "string") {
            res.status(400).send(`Bad Request: invalid user name: ${name}`);
            return false;
        };

        const filters = {
            name: name
        };

        const resp = await this.#app.inventories.list(filters);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).send(resp.data);
        return false;
    }

    async getByID(req, res) {

        const itemID = req.params.inventories_id;

        const resp = await this.#app.inventories.getByID(itemID);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).send(resp.data);
        return false;
    }

    async update(req, res) {

        const itemID = req.params.inventories_id;
        const display= req.body.display;
        const user_id = req.body.user_id;

        const params = { 
            display : display,
            user_id : user_id
        };

        const resp = await this.#app.inventories.update(itemID, params);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).end();
        return false;
    }

    
    async delete(req, res) {

        const itemID = req.params.inventories_id;

        if (typeof itemID !== "string") {
            res.status(400).send(`Bad Request: invalid inventories id: ${itemID}`);
            return false;
        };

        const resp = await this.#app.inventories.delete(itemID);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).end();
        return false;
    }
}

module.exports = InventoriesHandlers