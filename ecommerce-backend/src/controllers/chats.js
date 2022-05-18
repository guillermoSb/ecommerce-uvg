const { collection, getDocs, addDoc, query, where, updateDoc, doc } = require("firebase/firestore");
const { db } = require("../firebase");

/**
 * Get all chats
 * @param {*} req 
 * @param {*} res 
 */
const getAllChats = async (req, res) => {
    try {
        const querySnapshot = await getDocs(collection(db, "chats"));

        return res.status(200).send({
            ok: true,
            chats: querySnapshot.docs.map((doc) => doc.data())
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
 * Get all chats
 * @param {*} req 
 * @param {*} res 
 */
const getAllChatsBy = async (req, res) => {
    try {
        const { state } = req.params;
        const q = query(collection(db, "chats"), where("estado", "==", state));
        const querySnapshot = await getDocs(q);

        return res.status(200).send({
            ok: true,
            chats: querySnapshot.docs.map((doc) => doc.data())
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
        // Obtener el chat
        const chatsRef = collection(db, "chats");
        const chatQuery = query(chatsRef, where("iniciadoPor", "==", iniciadoPor), where("estado", "in", ["espera", "activo"]));
        const docs = await getDocs(chatQuery);

        if (docs.size > 0) {

            return res.status(200).send({
                ok: true,
                chat: {
                    ...docs.docs[0].data(),
                    id: docs.docs[0].id,
                },
            });
        }


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
            chat
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            ok: false,
            errors: [
                "Algo salió mal."
            ]
        });
    }
};

/**
 * Get all chats
 * @param {*} req 
 * @param {*} res 
 */
const setChatActive = async (req, res) => {
    try {
        const { iniciadoPor, atendidoPor } = req.body;
        const q = query(collection(db, "chats"),
            where("iniciadoPor", "==", iniciadoPor),
            where("estado", "==", "espera"),
            where("atendidoPor", "==", null));
        const querySnapshot = await getDocs(q);
        const id = querySnapshot.docs[0].id;
        const ref = doc(db, "chats", id);
        await updateDoc(ref, {
            estado: "activo",
            atendidoPor: atendidoPor,
            fechaInicio: new Date()
        });
        return res.status(200).send({
            ok: true,
            message: "Activado con exito."
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
    getAllChatsBy,
    createChat,
    setChatActive,
};