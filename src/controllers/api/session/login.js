require("dotenv").config();
const jwt = require("../../../auth/jwt");
const searchUser = require("../../../repositories/user/searchUser");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const columns = {
        email: email,
        password: password,
    };

    const user = await searchUser(columns);

    if (user.data) {
        // console.log(user);
        bcrypt.compare(password, user.data.password, (err, data) => {
            if (err) throw err;
            if (data) {
                const token = jwt.sign({
                    id: user.data.id,
                    email,
                    name: user.data.name,
                    phone: user.data.phone,
                    type: user.data.type,
                });

                return res.status(200).json({ message: "Login sucedido", name: user.data.name, token});
            } else {
                return res
                    .status(401)
                    .json({ message: "Senha incorreta, acesso negado" });
            }
        });
    } else {
        return res.status(404).send({ message: "Email não encontrado" });
    }
};