const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const ApiRouter = require("./routers/api");

const app = express();
app.use(bodyParser.json());
app.use("/api", ApiRouter);

module.exports = app;
