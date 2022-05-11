const { Router } = require("express");
const { check } = require("express-validator");
const { getAllChats, createChat, getAllChatsBy } = require("../controllers/chats");
const { validateFields } = require("../middlewares/validator");
const { chatUniqueValidator } = require("../validators/chat-unique");

const router = Router();

router.get("/", getAllChats); // GET /api/chats/
router.post(
  "/",
  [
    check("iniciadoPor", "El id del usuario es necesario.").notEmpty(),
    check("iniciadoPor").custom(chatUniqueValidator),
    validateFields,
  ],
  createChat
); // POST /api/chats

router.get(
  "/:state",
  [
    check("state", "El tipo de contenido es requerido")
      .notEmpty()
      .isIn(["espera", "activo"]),
  ],
  getAllChatsBy
); // GET /api/chats/

module.exports = router;
