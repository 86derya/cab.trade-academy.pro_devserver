const express = require("express");

const mainRoute = require("./controllers/main/main");
const login = require("./controllers/auth/login");
const getConfigs = require("./controllers/configs/getConfigs");

const apiRoutes = express.Router();

apiRoutes
  .post("/cab/auth/login", login)
  .get("/cab/configs", getConfigs)
  .get("/", mainRoute);

module.exports = apiRoutes;
