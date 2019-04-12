const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const ApiRouter = require("./routers/api");
const passport = require("./auth");
const app = express();
const mongoose = require("mongoose").connection;
const MongoStore = require("connect-mongo")(session);

app.use(bodyParser.json());
app.use(
  session({
    secret: "backend",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose })
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", ApiRouter);

module.exports = app;
