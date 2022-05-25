const { Router } = require("express");
const {
  getRecomendationByName,
  getRecomendationByCategory,
  getItemById,
  getRecomendationByRating,
  getRecomendationByBrand,
} = require("../controllers/reccomendacion");

const router = Router();

router.get("/get-nombre/:nombre", getRecomendationByName);
router.get("/by-category/:id", getRecomendationByCategory);
router.get("/get-item-by-id/:id", getItemById);
router.get("/get-calificacion/:calificacion", getRecomendationByRating);
router.get("/get-marca/:marca", getRecomendationByBrand);

module.exports = router;
