// require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('../../../auth/jwt');
const insert = require('../../../repositories/user/addUser');
// const db = require("../db");

exports.addUser = async (req, res) => {

    const { name, phone, email, password } = req.body;

    try {

        const encryptedPasswd = await bcrypt.hash(password, 10);

        const columns = {
            name: name,
            phone: phone,
            email: email,
            password: encryptedPasswd,
            type: "user",
        };
        // console.log(columns);

        const resp = await insert(columns);

        if (resp.err !== null) {
            console.log({ err: resp.err });
            console.log("CONSOLE DO RESP "+resp.data);

            res.status(500).send("Internal Server Error");
        } else {
            const usercreate = "criado";
            console.log("CONSOLE DO RESP "+resp.data);

            const token = jwt.sign({
                id: resp.data.id,
                name: name,
                phone: phone,
                email: email,
                password: encryptedPasswd,
                type: "user"
            });

            return res.status(200).json({ message: "Login sucedido", name: name, token });
            // res.cookie('auth', token).status(200).send({ message: 'Login sucedido', token, usercreate });
            // res.status(201).json(usercreate);
        }

    } catch (err) {
        console.log(err);
        errors = {
            message: 'Ocorreu um erro inesperado.',
            code: 500,
            detail: { ...err },
        };
        res.sendError(errors, 501);
    }
};

// async function insert(params) {
//     try {

//         // console.log(params);
//         // console.log(params);
//         // console.log(params.name);

//         const query = `INSERT INTO "user" (name, phone, email, password, type)
//                 VALUES ($1, $2, $3, $4, $5) RETURNING *`;
//         const values = [params.name, params.phone, params.email, params.password, params.type];

//         const result = await db.query(query, values);
//         console.log(result);

//         return { err: null };
//     } catch (err) {
//         return { err: err };
//     };
// }