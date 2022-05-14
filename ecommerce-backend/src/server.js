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
        chats: "/api/chats"
    };

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
        this.app.use(this.paths.chats, require("./routes/chats"));
       this.app.use(this.paths.chats, require("./routes/usuarioRoutes"));
    }
    /**
     * Implement firebase on the server
     */
    firebase() {
        const firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        };
        this.app = initializeApp(firebaseConfig);   // Initialize firebase app
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