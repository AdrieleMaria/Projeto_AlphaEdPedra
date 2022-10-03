
class TradesHandlers {

    #app

    constructor(app) {
        this.#app = app;
    }

    async save(req, res) {

        const name = req.body.name;
        const item_required_id = req.body.item_required_id;
        const item_offer_id = req.body.item_offer_id;
        const user_create_id = req.body.user_created_id;
        const created_at  = req.body.created_at;
        const type = req.body.type;

        const params = { 
            item_required_id  : item_required_id, 
            item_offer_id     : item_offer_id, 
            user_create_id    : user_create_id, 
            created_at        : created_at, 
            type              : type
        };

        const resp = await this.#app.trades.save(params);

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

        const resp = await this.#app.trades.list(filters);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).send(resp.data);
        return false;
    }

    async getByID(req, res) {

        const itemID = req.params.trades_id;

        if (typeof itemID !== "string") {
            res.status(400).send(`Bad Request: invalid user id: ${itemID}`);
            return false;
        };

        const resp = await this.#app.trades.getByID(itemID);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).send(resp.data);
        return false;
    }

    async update(req, res) {

        const itemID = req.params.trades_id;
        const item_required_id = req.body.item_required_id;
        const item_offer_id = req.body.item_offer_id;
        const user_create_id = req.body.user_created_id;
        const user_accept_id = req.body.user_accept_id;
        const created_at  = req.body.created_at;
        const type = req.body.type;
        const closed = req.body.closed;
        const closed_at = req.body.closed_at;

        const params = { 
            item_required_id  : item_required_id, 
            item_offer_id     : item_offer_id, 
            user_create_id    : user_create_id,
            user_accept_id    : user_accept_id, 
            created_at        : created_at, 
            type              : type,
            closed            : closed, 
            closed_at         : closed_at
        };

        const resp = await this.#app.trades.update(itemID, params);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).end();
        return false;
    }

    async delete(req, res) {

        const itemID = req.params.trades_id;

        if (typeof itemID !== "string") {
            res.status(400).send(`Bad Request: invalid pictures id: ${itemID}`);
            return false;
        };

        const resp = await this.#app.trades.delete(itemID);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).end();
        return false;
    }
}

module.exports = TradesHandlers