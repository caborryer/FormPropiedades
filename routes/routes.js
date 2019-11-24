const { Router } = require("express");
const router = Router();

const upload = require("../config/multer");
const PropiedadController = require("../controllers/propiedadesControllers");

const controller = new PropiedadController();

router.get("/", (req, res) => {
  res.send("funciona");
});

router
  .route("/propiedades")
  .post(upload.single("imagen"), controller.create)
  .get(controller.findAll);
router
  .route("/propiedades/:id")
  .get(controller.findOne)
  .put(upload.single("imagen"), controller.update);

module.exports = router;
