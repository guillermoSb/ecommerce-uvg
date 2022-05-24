const { Router } = require("express");
const { getRecomendationByName, getRecomendationByCategory } = require("../controllers/reccomendacion");

const router = Router();

router.get("/get-nombre/:nombre", getRecomendationByName);
router.get("/by-category/:categoria", getRecomendationByCategory);

module.exports = router;