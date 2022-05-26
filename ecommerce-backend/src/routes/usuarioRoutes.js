
const { Router } = require("express");
const { param } = require("express-validator");
const { getUsuario, getCurrentUser, getCurrentUserUID, listadoUsuarios } = require("../controllers/usuario");

const router = Router();



router.get ( //API GET /usuario/search/(userUID buscado) (Devuelve los datos del usuario buscado)
    "/search/:user",
    [
        param("user", "user invalido")
    ],
    getUsuario
);

router.get ( //API GET /usuario/current (Devuelve el email del usuario actualmente autenticado)
    "/current",
    getCurrentUser
);

router.get( //API GET /usuario/currentUID (Devuelve el UserID del usuario actualmente autenticado)
    "/currentUID",
    getCurrentUserUID
);

router.get( //API GET /usuario/usuarios (Listado de todos los usuarios y sus atributos)
    "/usuarios",
    listadoUsuarios
);

module.exports = router;

