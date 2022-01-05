const configCORS = require("./configCORS");
const errorResponse = require("./errorResponse");
const connectDB = require("./connectDB");
const session = require("./configSession");

module.exports = {
    configCORS,
    errorResponse,
    connectDB,
    session
}