const express = require("express");
const router = express.Router();

const { ObtenerTodosUsuarios, ObtenerUsuario, ObtenerVistaPrincipal, ProcesarFormulario } = require("../controladores/Usuarios");

router.get("/", ObtenerVistaPrincipal);
router.post("/", ProcesarFormulario);
router.get("/all", ObtenerTodosUsuarios);
router.get("/:id", ObtenerUsuario);

module.exports = router;
