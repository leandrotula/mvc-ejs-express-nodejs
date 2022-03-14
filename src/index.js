// Make express server
const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}));


const userRoutes = require("../routes/Usuarios");
app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto ",PORT);
});
