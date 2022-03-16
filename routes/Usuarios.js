const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');


const { ObtenerTodosUsuarios, ObtenerUsuario, ObtenerVistaPrincipal, ProcesarFormulario } = require("../controladores/Usuarios");

router.get("/", ObtenerVistaPrincipal);
router.post("/",
body('nombre').isLength({ min: 5 }),
(req, res) => {
    const errors = validationResult(req)
    ProcesarFormulario(req, res, errors)
});
router.get("/all", ObtenerTodosUsuarios);
router.get("/:id", ObtenerUsuario);

module.exports = router;
