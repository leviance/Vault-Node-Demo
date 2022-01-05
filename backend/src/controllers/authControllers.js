const {vault} = require("../helper/index");


class AuthController {

    async tokenAuth(req, res) {
        
        try {
            const token = req.body.token;
            let policies = "user";

            const tokenInfor = await vault.tokenLookUp(token);

            if(tokenInfor.data.policies.includes("root"))
            {
                policies = "root";
            }
            

            req.session.user_data = {
                token,
                policies
            }

            res.status(204).send();
        } catch (error) {
            
            res.sendError(new Error("Token không hợp lệ!"));
        }
    }

    checkLogin(req, res) {
        if(req.session.user_data?.token)
        {
            return res.status(204).send();
        }

        return res.status(405).send();
    }

    checkLogout(req, res) {
        if(!req.session.user_data?.token)
        {
            return res.status(204).send();
        }

        return res.status(405).send();
    }
}

module.exports = new AuthController;