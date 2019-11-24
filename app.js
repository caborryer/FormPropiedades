const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const routes = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

//Db conection
const db = require("./db/connect");

db.sync()
  .then(() => console.log("Conectado al Servidor de la BD"))
  .catch(error => console.log(error));

app.set("port", 5000 || process.env.PORT);

//Rutas
app.use("/", routes);

// this folders for this application will be used to store public file images
app.use("/uploads", express.static(path.resolve("uploads")));

app.listen(app.get("port"), () => {
  console.log(`El servidor está corriendo en el puerto ${app.get("port")}`);
});
