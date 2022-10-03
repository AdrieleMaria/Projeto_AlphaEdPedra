require('dotenv').config()

const { Pool } = require("pg");

const App = require('./src/app');
const API = require("./src/controllers/api/index");

function main(){
    const pool = setupPool();
    const app = new App().init(pool);

    const api = new API(app);
    const router = api.init();
    router.listen(8080, () => { console.log("\nServer running on port 8080...") });
    
    console.log("Node iniciado com sucesso...")
}

function setupPool(){
    return new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATABASE,
    });
}


main();