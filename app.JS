const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const router = require("./src/routes/routes");
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.use(cookieParser());
app.use(router);

app.listen(PORT, function () { console.log("Servidor Rodando na porta " + PORT + "!"); });