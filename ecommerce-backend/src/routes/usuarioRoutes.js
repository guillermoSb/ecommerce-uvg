
const { Router } = require("express");
const { param } = require("express-validator");
const { getUsuario } = require("../controllers/usuario");

const router = Router();

router.get (
    "/:user",
    [
        param("user", "user invalido")
    ],
    getUsuario
);

module.exports = router;

