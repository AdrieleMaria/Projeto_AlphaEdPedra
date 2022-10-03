
class PicturesHandlers {

    #app

    constructor(app) {
        this.#app = app;
    }

    async save(req, res) {

        const name = req.body.name;
        const item_id = req.body.item_id;

        // if (typeof name !== "string") {
        //     res.status(400).send(`Bad Request: invalid user name: ${name}`);
        //     return false;
        // };

        
        // if (typeof login !== "string") {
        //     res.status(400).send(`Bad Request: invalid user email: ${login}`);
        //     return false;
        // };


        // if (typeof email !== "string") {
        //     res.status(400).send(`Bad Request: invalid user email: ${email}`);
        //     return false;
        // };

        // if (typeof password !== "string") {
        //     res.status(400).send(`Bad Request: invalid user phone: ${phone}`);
        //     return false;
        // };

        // if (typeof type !== "number") {
        //     res.status(400).send(`Bad Request: invalid user active: ${active}`);
        //     return false;
        // };

        const params = { 
          name            : name,
          item_id         : item_id
        };

        const resp = await this.#app.pictures.save(params);

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

        const resp = await this.#app.pictures.list(filters);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).send(resp.data);
        return false;
    }

    async getByID(req, res) {

        const itemID = req.params.pictures_id;

        if (typeof itemID !== "string") {
            res.status(400).send(`Bad Request: invalid user id: ${itemID}`);
            return false;
        };

        const resp = await this.#app.pictures.getByID(itemID);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).send(resp.data);
        return false;
    }

    async update(req, res) {

        console.log(req.body)
        const itemID = req.params.pictures_id;
        const name = req.body.name;
        const item_id = req.body.item_id;

        if (typeof itemID !== "string") {
            res.status(400).send(`Bad Request: invalid pictures id: ${itemID}`);
            return false;
        };

        const params = { 
            name     : name,
            item_id  : item_id
        };
  
        const resp = await this.#app.pictures.update(itemID, params);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).end();
        return false;
    }

    async delete(req, res) {

        const itemID = req.params.pictures_id;

        if (typeof itemID !== "string") {
            res.status(400).send(`Bad Request: invalid pictures id: ${itemID}`);
            return false;
        };

        const resp = await this.#app.pictures.delete(itemID);

        if (resp.err !== null) {
            console.log({ err: resp.err });

            res.status(500).send("Internal Server Error");
            return true;
        };

        res.status(200).end();
        return false;
    }
}

module.exports = PicturesHandlers;
