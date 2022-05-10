const { collection, getDocs, addDoc } = require("firebase/firestore");
const { db } = require("../firebase");

/**
 * Get all chats
 * @param {*} req 
 * @param {*} res 
 */
const getAllChats = async (req, res) => {
    try {
        const querySnapshot = await getDocs(collection(db, "chats"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
        return res.status(200).send({
            ok: true,
            chats: []
        });
    } catch (error) {
        return res.status(500).send({
            ok: false,
            errors: [
                "Algo salió mal."
            ]
        });
    }

};

/**
 * Create a chat
 * @param {*} req 
 * @param {*} res 
 */
const createChat = async (req, res) => {
    try {
        const { iniciadoPor } = req.body;
        // Objeto de chat a ser creado
        const chat = {
            iniciadoPor,
            estado: "espera",
            atendidoPor: null,
            fechaInicio: null,
            fechaFin: null,
            mensajes: []
        };
        // Agregar a firestore
        const docRef = await addDoc(collection(db, "chats"), chat);
        chat.id = docRef.id;
        // Enviar respuesta
        return res.status(200).send({
            ok: true,
            chat,
        });

    } catch (error) {
        return res.status(500).send({
            ok: false,
            errors: [
                "Algo salió mal."
            ]
        });
    }
};

module.exports = {
    getAllChats,
    createChat
};