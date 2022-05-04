const express = require('express');
const cors = require('cors');

/**
 * Definicion del servidor.
 */
class Server {

    /**
     * Rutas de cada modulo
     */
    paths = {
        chats: '/api/chats'
    }

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
        this.app.use(this.paths.chats, require('./routes/chats'))
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
        this.app.use(express.json())
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