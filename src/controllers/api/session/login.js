require('dotenv').config();
const jwt = require('../../../auth/jwt');
const searchUser = require('../../../repositories/user/searchUser');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {

    const { email, password } = req.body;
    const encryptedPasswd = await bcrypt.hash(password, 10);

    const columns = {
        email: email,
        password: encryptedPasswd,
    };

    const user = await searchUser(columns);

    if (user.data !== null) {

        if (user.data.password !== columns.password) {
            res.status(401).send("Senha incorreta, acesso negado");
        }

        const token = jwt.sign({
            id: user.id,
            email,
            name: user.name,
            phone: user.phone,
            type: user.type,
        });

        res.cookie('auth', token).status(200).send({ message: 'Login sucedido', token });

    } else {
        errors = {
            message: 'Email não encontrado',
            code: 404,
        };
        res.sendError(errors, 404);
    }
};
