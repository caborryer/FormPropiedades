const Sequelize = require("sequelize");
const db = require("../db/connect");

const Propiedades = db.define("Propiedades", {
  id_propiedades: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: true
  },
  descripcion: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  precio: {
    type: Sequelize.DOUBLE(8, 3),
    allowNull: true
  },
  sector: Sequelize.STRING(255),
  direccion: Sequelize.STRING(150),
  area: Sequelize.INTEGER,
  banios: Sequelize.INTEGER,
  imagen: Sequelize.STRING(255),
  habitaciones: Sequelize.INTEGER,
  cod_referencia: {
    type: Sequelize.STRING(20),
    unique: true
  },
  estado_disponible: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});
module.exports = Propiedades;
