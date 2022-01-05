const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require('body-parser');

const server = http.createServer(app);

const initRoutes = require("./api/index");
const {configCORS, errorResponse, session} = require("./configs/index");

// config CORS
configCORS(app);

// config session
session.config(app);

// add body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// init routes
initRoutes(app, errorResponse);


server.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`)
})