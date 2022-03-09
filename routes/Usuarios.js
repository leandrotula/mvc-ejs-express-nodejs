const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUser, GetUsuario } = require("../controladores/Usuarios");

router.get("/all", GetAllUsers);
//router.get("/:id", GetUser);
router.get("/:id", GetUsuario);

module.exports = router;
