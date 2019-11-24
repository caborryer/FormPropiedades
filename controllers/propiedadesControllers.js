const Propiedades = require("../models/propiedades");
const { uploads } = require("../config/environment");
// const path = require("path");

class PropiedadesController {
  constructor() {}
  // Se crean propiedades
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
  //Sa llama una sola propiedad

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
  //Se traen varias propiedades
  async findAll(req, res, next) {
    const propiedad = await Propiedades.findAll();

    if (!propiedad)
      return res
        .status(400)
        .json({ message: "No hay propiedades", error: true });

    res.status(200).json({
      message: "Success",
      data: propiedad,
      error: false
    });
  }

  // Se actualiza propiedad
  async update(req, res, next) {
    try {
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

      const propiedad = await Propiedades.update(
        {
          titulo,
          descripcion,
          precio,
          sector,
          direccion,
          area,
          banios,
          habitaciones,
          imagen
        },
        { where: { id_propiedades: req.params.id } }
      );
      if (!propiedad || propiedad === 0)
        return res
          .status(400)
          .json({ message: "La propiedad no se actualizo", error: true });

      res.status(200).json({
        message: "La propiedad se ha actualizado",
        data: propiedad,
        error: false
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error: " + err.toString(), error: true });
    }
  }
  //Se elimina propiedad
  async destroy(req, res, next) {
    // const { id_propiedades } = req.params;

    const propiedad = await Propiedades.destroy({
      where: { id_propiedades: req.params.id }
    });
    if (!propiedad)
      return res.status(400).json({
        message: "La propiedad no se ha podido eliminar",
        error: true
      });

    res.status(200).json({
      message: "La propiedad se ha eliminado ",
      data: propiedad,
      error: false
    });
  }
}

module.exports = PropiedadesController;
