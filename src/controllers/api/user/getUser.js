const searchUser = require('../../../repositories/user/getUser');
const jwt = require('../../../auth/jwt');

exports.getUser = async (req, res, next) => {

    const userid = req.auth.id;
    //console.log(userid)

    const columns = {
        id: userid
    };

    //console.log("columns search user api", columns);

    const user = await searchUser(columns);

    if (user.err !== null) {
        //const msg = { message: "Usuário existente" };
        res.status(200).send(user);
    } else {
        return next();
    }
}
