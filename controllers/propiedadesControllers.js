const Propiedades = require("../models/propiedades");
const { uploads } = require("../config/environment");
const path = require("path");

class PropiedadesController {
  constructor() {}

  async create(req, res, next) {
    const {
      titulo,
      descripcion,
      precio,
      sector,
      direccion,
      area,
      banios,
      habitaciones,
      imagen
    } = req.body;
    const propiedad = await Propiedades.create({
      titulo,
      descripcion,
      precio,
      sector,
      direccion,
      area,
      banios,
      habitaciones,
      imagen
    });
    res.status(200).json({
      message: "La propiedad fue guardada",
      propiedad
    });
  }

  async findOne(req, res, next) {
    const propiedad = await Propiedades.findAll({
      where: { id_propiedades: req.params.id },
      limit: 1
    });

    if (!propiedad)
      return res
        .status(400)
        .json({ message: "There isn't propiedades", error: true });
    propiedad[0].imagen = `${uploads}${propiedad[0].imagen}`;

    res.status(200).json({
      message: "Success",
      data: propiedad,
      error: false
    });
  }
}

module.exports = PropiedadesController;
