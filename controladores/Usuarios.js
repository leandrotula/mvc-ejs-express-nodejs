const {
  ObtenerUsuarios,
  ObtenerUsuarioPorId,
} = require("../service/UsuarioAccesoFuenteDatos");

const ObtenerTodosUsuarios = (req, res) => {
  const userList = ObtenerUsuarios();

  return res.json(userList);
};

const ObtenerVistaPrincipal = (req, res) => {

  res.render('vistas/formulario')
}

const ProcesarFormulario = (req, res, errors) => {

  if (!errors.isEmpty()) {
    console.log("Errores ", errors)
    res.render('vistas/error')
    return;
  }
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var usuarioObtenido = {
    nombre,
    apellido
  }

  res.render('vistas/vistaUsuario', {
    usuario: usuarioObtenido
  })
}

const ObtenerUsuario = (req, res) => {
  const userId = req.params.id;
  const usuarioObtenido = ObtenerUsuarioPorId(userId);

  res.render('vistas/vistaUsuario', {
    usuario: usuarioObtenido
  })
};

module.exports = {
  ObtenerTodosUsuarios: ObtenerTodosUsuarios,
  ObtenerUsuario: ObtenerUsuario,
  ObtenerVistaPrincipal: ObtenerVistaPrincipal,
  ProcesarFormulario: ProcesarFormulario
};
