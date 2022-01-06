const {vault} = require("../helper");
const {clientError, appRoleMess, serverError} = require("../../lang/vi");

class HomeController {

    logout(req, res) {

        req.session.destroy();
        res.status(204).send();
    }

    async enableAppRole(req, res) {

        const {token} = req.session.userData;
        const path = req.body.path;

        try {
            await vault.enableAppRole(token, path);

            return res.status(200).send(appRoleMess.enableSuccess(path));

        } catch (error) {
            let message = serverError.unknow_error;

            if(error.status === 403) message = clientError.permissionDenied;
            if(error.status === 404) message = clientError.bad_request;
            if(error.status === 400) message = appRoleMess.alreadyEnable(path);

            return res.status(error.status).send(message);
        }
    }

    async getAuthMethods(req, res) {

        try {
            
            const {token} = req.session.userData;

            const authMethods = await vault.getAuthMethods(token);
            
            return res.status(200).send(authMethods.data);

        } catch (error) {
            let message = serverError.unknow_error;

            if(error.status === 403) message = clientError.permissionDenied;
            if(error.status === 404) message = clientError.bad_request;

            return res.status(400).send(message);
        }
    }

}

module.exports = new HomeController;