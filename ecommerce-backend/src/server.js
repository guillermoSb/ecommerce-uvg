const express = require("express");
const cors = require("cors");

/**
 * Definicion del servidor.
 */
class Server {

    /**
     * Rutas de cada modulo
     */
    paths = {
<<<<<<< HEAD
        chats: '/api/chats',
        reccomendacion: '/api/reccomendacion'
    }
=======
        chats: "/api/chats",
        usuarioRoutes: "/usuario"
    };
>>>>>>> 8081733884530756e2d7d00b31dfe61442f44f68

    constructor() {
        this.app = express();
        this.cors();
        this.middlewares();
        this.routes();
    }
    /**
     * Metodo que indica a express cuales son las rutas del api.
     */
    routes() {
<<<<<<< HEAD
        this.app.use(this.paths.chats, require('./routes/chats'));
        this.app.use(this.paths.reccomendacion, require('./routes/reccomendacion'))

        
=======
        this.app.use(this.paths.chats, require("./routes/chats"));
        this.app.use(this.paths.usuarioRoutes, require("./routes/usuarioRoutes"));
>>>>>>> 8081733884530756e2d7d00b31dfe61442f44f68
    }
    /**
     * Habilitar CORS
     */
    cors() {
        this.app.use(cors());
    }
    /**
     * Middlewares a utilizar
     */
    middlewares() {
        this.app.use(express.json());
    }
    /**
     * Metodo que pone el servidor a escuchar requests HTTP.
     */
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en el puerto: ${process.env.PORT}`);
        });
    }


}

module.exports = Server;