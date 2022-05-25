const { Router } = require("express");
const { getRecomendationByName, getRecomendationByCategory, getItemById } = require("../controllers/reccomendacion");

const router = Router();

router.get("/get-nombre/:nombre", getRecomendationByName);
router.get("/by-category/:categoria", getRecomendationByCategory);
router.get("/get-item-by-id/:id", getItemById);

module.exports = router;