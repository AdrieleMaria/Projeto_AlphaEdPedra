const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const router = require("./src/routes/routes");

const photoStone = require("./src/photoStone/");

const path = require('path');
const PORT = process.env.PORT;

const fileUpload = require("express-fileupload");
app.use(fileUpload());

// app.use('./src/photoStone', express.static(`${__dirname}/src/photoStone`));
// app.use('/photoStone', express.static(path.join(`${__dirname}/photoStone`)));
// app.use(express.static("./src/photoStone"));
// app.use('/photoStone', express.static(`${__dirname}/photoStone`));
// app.use('/photoStone', express.static('./src/photoStone'));
// app.use('/photoStone', express.static(__dirname + '/public'));
// app.use('/photoStone', express.static(__dirname + '\\src\\photoStone'));
// console.log(__dirname + '\\src\\photoStone');

// app.use('/photoStone', express.static(path.join(__dirname, '.', 'src', 'photoStone')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.use(cookieParser());
app.use(router);

app.listen(PORT, function () { console.log("Servidor Rodando na porta " + PORT + "!"); });