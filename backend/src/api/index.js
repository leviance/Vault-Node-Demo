const authApi = require('./authApi');
const homeApi = require('./homeApi');

function initRoutes(app, errorResponse) {

    /**
     * config midware
     */
    app.use((req, res, next) => {
        res.sendError = errorResponse.bind(res);
        next();
    })

    app.use("/", homeApi);
    app.use("/auth", authApi);
}


module.exports = initRoutes;