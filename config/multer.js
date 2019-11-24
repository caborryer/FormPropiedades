const multer = require("multer");
const { uploads } = require("./environment");

// Settings
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploads);
  },
  filename: async function(req, file, cb) {
    //Esté nombre es el que se guarda en la base de datos
    let filename = `${file.fieldname}-${Date.now()}`;
    req.body.imagen = filename;
    cb(null, filename);
  }
});
const upload = multer({ storage });

module.exports = upload;
