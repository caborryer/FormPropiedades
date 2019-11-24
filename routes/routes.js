const { Router } = require("express");
const router = Router();

const upload = require("../config/multer");
const PropiedadController = require("../controllers/propiedadesControllers");
router.get("/", (req, res) => {
  res.send("funciona");
});

const controller = new PropiedadController();

router
  .route("/nueva-propiedad")
  .post(upload.single("imagen"), controller.create);
router.route("/nueva-propiedad/:id").get(controller.findOne);
module.exports = router;
