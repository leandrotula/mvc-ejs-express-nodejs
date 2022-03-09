const {
  QueryListOfUsers,
  QueryUserById,
} = require("../service/UsuarioAccesoFuenteDatos");

const GetAllUsers = (req, res) => {
  const userList = QueryListOfUsers();

  return res.json(userList);
};

const GetUser = (req, res) => {
  const userId = req.params.id;
  const user = QueryUserById(userId);

  return res.json(user);
};

const GetUsuario = (req, res) => {
  const userId = req.params.id;
  const usuarioObtenido = QueryUserById(userId);

  res.render('vistas/vistaUsuario', {
    usuario: usuarioObtenido
  })
};

module.exports = {
  GetAllUsers,
  GetUser,
  GetUsuario
};
