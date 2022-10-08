require('dotenv').config();
const jwt = require('../../../auth/jwt');
const searchUser = require('../../../repositories/user/searchUser');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {

    const { email, password } = req.body;
    // const encryptedPasswd = await bcrypt.hash(password, 10);

    const columns = {
        email: email,
        password: password
    };

    console.log(columns);

    const user = await searchUser(columns);

    if (user.data !== null) {

        console.log(user.data);
        console.log(user.data.password, columns.password);

        // const valid = await bcrypt.compare(user.data.password, columns.password);
        // console.log(valid);


        bcrypt.compare(password, user.data.password, (err, data) => {
            if (err) throw err
            if (data) {

                const token = jwt.sign({
                    id: user.id,
                    email,
                    name: user.name,
                    phone: user.phone,
                    type: user.type,
                });

                return res.cookie('auth', token).status(200).send({ message: 'Login sucedido', token });

            } else {
                return res.status(401).send({ message: "Senha incorreta, acesso negado" });
            }
        })
        // if (!(await bcrypt.compare(user.data.password, columns.password))) {

        //     res.status(401).send({ message: "Senha incorreta, acesso negado" });

        // } else {
        //     const token = jwt.sign({
        //         id: user.id,
        //         email,
        //         name: user.name,
        //         phone: user.phone,
        //         type: user.type,
        //     });

        //     res.cookie('auth', token).status(200).send({ message: 'Login sucedido', token });
        // }

    } else {
        errors = {
            message: 'Email não encontrado',
            code: 404,
        };
        res.send(errors);
    }
};
