const { INFORMACION_USUARIO } = require("../modelo/DatosDeUsuario");

// Returns User With Id
const QueryUserById = (id) => {
  let user;
  INFORMACION_USUARIO.forEach((userData) => {
    if (userData.id === Number(id)) {
      user = userData;
    }
  });
  return user;
};

// Returns List of Users
const QueryListOfUsers = () => {
  return INFORMACION_USUARIO;
};

module.exports = {
  QueryUserById,
  QueryListOfUsers,
};
