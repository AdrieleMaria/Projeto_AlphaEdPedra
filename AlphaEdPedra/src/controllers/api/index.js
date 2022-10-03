const express = require('express');

const ItensHandlers = require('./itens');
const UsersHandlers = require("./users");
const PicturesHandlers = require("./pictures");
const TradesHandlers = require("./trades");
const InventoriesHandlers = require("./inventories");

class API {
    #app;

    constructor(app) {
        this.#app = app;
    }

    init() {
       const router = express();
       router.use(express.urlencoded({extended: true}));
       router.use(express.json());

       const users = new UsersHandlers(this.#app);
       const itens = new ItensHandlers(this.#app);
       const pictures = new PicturesHandlers(this.#app);
       const trades = new TradesHandlers(this.#app);
       const inventories = new InventoriesHandlers(this.#app);

       router.post("/users", users.save.bind(users));
       router.get("/users", users.list.bind(users));
       router.get("/users/:user_id", users.getByID.bind(users));
       router.put("/users/:user_id", users.update.bind(users));
       router.delete("/users/:user_id", users.delete.bind(users));

       router.post("/itens", itens.save.bind(itens));
       router.get("/itens", itens.list.bind(itens));
       router.get("/itens/:item_id", itens.getByID.bind(itens));
       router.put("/itens/:item_id", itens.update.bind(itens));
       router.delete("/itens/:item_id", itens.delete.bind(itens));

       router.post("/pictures", pictures.save.bind(pictures));
       router.get("/pictures", pictures.list.bind(pictures));
       router.get("/pictures/:pictures_id", pictures.getByID.bind(pictures));
       router.put("/pictures/:pictures_id", pictures.update.bind(pictures));
       router.delete("/pictures/:pictures_id", pictures.delete.bind(pictures));

       router.post("/trades", trades.save.bind(trades));
       router.get("/trades", trades.list.bind(trades));
       router.get("/trades/:trades_id", trades.getByID.bind(trades));
       router.put("/trades/:trades_id", trades.update.bind(trades));
       router.delete("/trades/:trades_id", trades.delete.bind(trades));

       router.post("/inventories", inventories.save.bind(inventories));
       router.get("/inventories", inventories.list.bind(inventories));
       router.get("/inventories/:inventories_id", inventories.getByID.bind(inventories));
       router.put("/inventories/:inventories_id", inventories.update.bind(inventories));
       router.delete("/inventories/:inventories_id", inventories.delete.bind(inventories));

       return router;
    }


}

module.exports = API;
