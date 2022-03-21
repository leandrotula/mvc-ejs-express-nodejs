// Make express server
const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const oneDay = 1000 * 60 * 60 * 24;

const PORT = 3000;

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}));

app.use(sessions({
  secret: "123456",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));

app.use(cookieParser());

const userRoutes = require("../routes/Usuarios");
app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto ",PORT);
});
