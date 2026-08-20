require("dotenv").config("../.env");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { notFoundHandler, errorHandler } = require("./error");

const app = express();

app.use(require("./middleware.js"));
app.use(require("./routes.js"));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
