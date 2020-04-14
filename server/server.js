const express = require("express");
// const mongoose = require('mongoose');
const bodyParser = require("body-parser");
// const PORT = process.env.PORT || 3000;
require('./config/config')

const app = express();

// MIDDLEWARE
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hello World");
});
app.post("/user", (req, res) => {
  const { body } = req;
  if(!body.name){
      res.status(400).json({
          ok:false,
          msg: 'El nombre es requerido'
      })
  }
  res.json(body);
});
app.put("/user/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);

  res.json("put user");
});
app.delete("/user/:id", (req, res) => {
  res.json("delete user");
});

// DB connect
// mongoose.set('useCreateIndex', true)
// mongoose.connect('mongodb://localhost:27017/nameDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
//     if (err) throw err
//     console.log('Conexion a base de datos:  \x1b[32m%s\x1b[0m','exitosa')
// })

// ROUTES
// app.use('/route', routeRoutes)
//app.use('/login', loginRoutes)

app.listen(PORT, () => {
  console.log(
    "Servidor corriendo en puerto: \x1b[4m\x1b[32m%s\x1b[0m",
    `http://localhost:${PORT}`
  );
});
