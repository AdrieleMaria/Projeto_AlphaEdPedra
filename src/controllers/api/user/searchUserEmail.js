const searchUser = require('../../../repositories/user/searchUser');

exports.searchEmail = async (req, res, next) => {

    const columns = {
        email: req.body.email
    };

    console.log("columns search user api", columns);

    const user = await searchUser(columns);

    if (user.err !== null) {
        const msg = { message: "Usuário existente" };
        res.status(409).send(msg);
    } else {
        return next();
    }
}
