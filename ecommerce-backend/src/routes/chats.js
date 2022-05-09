const { Router } = require("express");
const { getAllChats, createChat } = require("../controllers/chats");
const { validateFields } = require("../middlewares/validator");

const router = Router();

router.get("/", getAllChats);   // GET /api/chats/
router.post("/", createChat);   // POST /api/chats

module.exports = router;