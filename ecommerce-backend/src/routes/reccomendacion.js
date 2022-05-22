const { Router } = require("express");
const { getRecomendationByName, getRecomendationByCategory } = require("../controllers/reccomendacion");

const router = Router();

router.get("/", getRecomendationByName);   // GET /api/chats/
router.get("/by-category", getRecomendationByCategory);   // GET /api/chats/

module.exports = router;