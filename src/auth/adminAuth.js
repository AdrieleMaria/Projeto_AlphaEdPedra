const fs = require('fs');
const jwt = require('./jwt');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.auth;
    try {
        const payload = await jwt.verify(token);

        if (payload.type === "admin") {
            next();
        }
        else {
            return res.send("Acesso negado!");
        }

    } catch (error) {
        fs.readFile('../logs/dataError.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const buffer = JSON.parse(data);
                buffer.push(error);
                fs.writeFile('../logs/dataError.json', JSON.stringify(buffer), (err) => {
                    console.log(err);
                });
            }
        });
        res.cookie('auth').status(401).send('Falha na autenticação do usuário');
    }
};

module.exports = authMiddleware;