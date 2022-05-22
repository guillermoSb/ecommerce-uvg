const { Router } = require("express");
const { getRecomendationByName } = require("../controllers/reccomendacion");

const router = Router();

router.get("/get-nombre/:nombre", getRecomendationByName);   // GET /api/chats/

module.exports = router;