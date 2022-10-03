const Users = require('./users');
const Itens = require('./itens');
const Pictures = require('./pictures');
const Trades = require('./trades');
const Inventories = require('./inventories');

class Services {
    
    #tables
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

}

module.exports = Services;