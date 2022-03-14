const { INFORMACION_USUARIO } = require("../modelo/DatosDeUsuario");

const buscarUsuarioPorId = (id) => {
  let user;
  INFORMACION_USUARIO.forEach((userData) => {
    if (userData.id === Number(id)) {
      user = userData;
    }
  });
  return user;
};

const ObtenerUsuarios = () => {
  return INFORMACION_USUARIO;
};

module.exports = {
  ObtenerUsuarioPorId: buscarUsuarioPorId,
  ObtenerUsuarios: ObtenerUsuarios,
};
