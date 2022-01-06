const {appRoleMess} = require("../../lang/vi");

class AppRoleValidation {

    enableAppRole(req, res, next) {

        const path = req.body.path;

        if(!/^[A-Za-z0-9-]+$/i.test(path))
        {
            return res.status(400).send(appRoleMess.pathInvalid);
        }

        next();
    }

}

module.exports = new AppRoleValidation;