const session = require('express-session');
const MongoStore = require('connect-mongo');

let init_session = session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ 
    mongoUrl: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    autoRemove: 'native'
  }),
  rolling: true,
  cookie: { 
    maxAge: 1000 * 60 * 60 * 1 // 1 hour
  }
})

// for get session from socket io
let sessionMiddleware = init_session;

let config = (app) => {
  console.log(`${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
  app.use(init_session)
}

module.exports = {
  config,
  sessionMiddleware
}