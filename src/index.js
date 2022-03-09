// Make express server
const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')

const userRoutes = require("../routes/Usuarios");
app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto ",PORT);
});
