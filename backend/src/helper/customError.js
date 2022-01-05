class CustomError extends Error {

    constructor(message = "Quyền truy cập bị từ chối!", status = 403, code =  "GENERIC") {
        
        super(message);

        Error.stackTraceLimit = 3;

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

        this.code = code;
        this.status = status;
    }
}

module.exports = CustomError;