var session = require("express-session");
const { USUARIO_SESION_VALIDO } = require("../modelo/DatosDeUsuario");
const {
  ObtenerUsuarios,
  ObtenerUsuarioPorId,
} = require("../service/UsuarioAccesoFuenteDatos");

const ObtenerTodosUsuarios = (req, res) => {
  const userList = ObtenerUsuarios();

  return res.json(userList);
};

const ObtenerVistaPrincipal = (req, res) => {

  session = req.session;
  if (session.userid) {
    res.render("vistas/bienvenido");
    return;
  }

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
  
  if (nombre == USUARIO_SESION_VALIDO.nombre && apellido == USUARIO_SESION_VALIDO.apellido) {
    session = req.session;
    session.userid = nombre;
    console.log(req.session)
    res.render('vistas/vistaUsuario', {
      usuario: usuarioObtenido
    })

  } else {
    res.render('vistas/error')
    return;
  }

}

const ObtenerUsuario = (req, res) => {
  const userId = req.params.id;
  const usuarioObtenido = ObtenerUsuarioPorId(userId);

  res.render('vistas/vistaUsuario', {
    usuario: usuarioObtenido
  })
};

const destruirSesion = (req, res) => {
  req.session.destroy();
  res.render('vistas/bienvenido');
}

module.exports = {
  ObtenerTodosUsuarios: ObtenerTodosUsuarios,
  ObtenerUsuario: ObtenerUsuario,
  ObtenerVistaPrincipal: ObtenerVistaPrincipal,
  ProcesarFormulario: ProcesarFormulario,
  destruirSesion: destruirSesion
};
