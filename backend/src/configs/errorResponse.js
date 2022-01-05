const { server_error, client_error } = require("../../lang/vi");
const {CustomError} = require("../helper/index");


function ErrorResponse(custom_error) {

    if (custom_error instanceof CustomError) {

        return this.status(custom_error.status).send(custom_error.message);

    } else if (custom_error instanceof Error) {

        if (custom_error.message.length)
            return this.status(403).send(custom_error.message);

        return this.status(400).send(client_error.bad_request);

    } else {

        return this.status(500).send(server_error.unknow_error);
    }
}


module.exports = ErrorResponse;