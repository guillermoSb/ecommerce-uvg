const { Router } = require("express");
const { check, param } = require("express-validator");
const { getAllChats, createChat, getAllChatsBy, setChatActive } = require("../controllers/chats");
const { validateFields, validateState } = require("../middlewares/validator");
const { chatUniqueValidator } = require("../validators/chat-unique");

const router = Router();

router.get("/", getAllChats); // GET /api/chats/
router.post(
  "/",
  [
    check("iniciadoPor", "El id del usuario es necesario.").notEmpty(),
    validateFields,
  ],
  createChat
); // POST /api/chats

router.get(
  "/:state",
  [
    param("state", "Estado invalido.").custom(validateState)
  ],
  getAllChatsBy
); // GET /api/chats/

router.post(
  "/activate",
  [
    check("iniciadoPor", "El id del usuario es necesario.").notEmpty(),
    check("atendidoPor", "El id del admin es necesario.").notEmpty(),
    validateFields,
  ],
  setChatActive
); // POST /api/chats

module.exports = router;
