const { Router } = require("express");
const { getRecomendationByName, getRecomendationByCategory } = require("../controllers/reccomendacion");

const router = Router();

router.get("/get-nombre/:nombre", getRecomendationByName);
router.get("/by-category", getRecomendationByCategory);

module.exports = router;