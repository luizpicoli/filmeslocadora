const express = require("express");
const routes = express.Router();

const DestaqueController = require("./controllers/DestaqueController");
const FilmeController = require("./controllers/FilmeController");
const UsuarioController = require("./controllers/UsuarioController");
const login = require("./middleware/login")

routes.get("/filmes",  login, FilmeController.index)
      .post("/filmes", FilmeController.store);

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login);
      
routes.get("/destaques", DestaqueController.index)

module.exports = routes;
