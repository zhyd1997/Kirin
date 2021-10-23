export {}; // fix: Cannot redeclare block-scoped variable '*'.ts(2451)

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./db");
const errorHandler = require("./middleware/errorHandler");

// load env vars
dotenv.config();

// connect to DB
db.connect();

// route files
const auth = require("./routes/auth");
const users = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// mount routers
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);

// error handler
app.use(errorHandler);

module.exports = app;
