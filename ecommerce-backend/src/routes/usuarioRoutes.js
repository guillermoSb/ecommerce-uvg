
const { Router } = require("express");
const { param } = require("express-validator");
const { getUsuario, getCurrentUser, getCurrentUserUID, listadoUsuarios } = require("../controllers/usuario");

const router = Router();



router.get (
    "/search/:user",
    [
        param("user", "user invalido")
    ],
    getUsuario
);

router.get (
    "/current",
    getCurrentUser
);

router.get(
    "/currentUID",
    getCurrentUserUID
);

router.get(
    "/usuarios",
    listadoUsuarios
);

module.exports = router;

