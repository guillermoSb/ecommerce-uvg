const { collection, getDocs, addDoc, query, where, updateDoc, doc, arrayUnion, getDoc } = require("firebase/firestore");
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
            chats: querySnapshot.docs.map((doc) => {

                return { ...doc.data(), id: doc.id };

            }),
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
            chats: querySnapshot.docs.map((doc) => {

                return { ...doc.data(), id: doc.id };

            }),
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
        // Agregar a firestoreF
        const docRef = await addDoc(collection(db, "chats"), chat);
        chat.id = docRef.id;
        // Enviar respuesta
        return res.status(200).send({
            ok: true,
            chat
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
 * Update chat state
 * @param {*} req 
 * @param {*} res 
 */
const setChatState = async (req, res) => {
    try {
        const { id, estado } = req.body;

        let querySnapshot = await getDoc(doc(db, "chats", id));
        if (querySnapshot.exists()) {
            const ref = doc(db, "chats", id);
            const updatedDoc = {
                estado
            };
            // If the state is active, do some extra updates.
            if (estado === "activo") {
                const {atendidoPor} = req.body;
                updateDoc.fechaInicio = new Date();
                updateDoc.atendidoPor = atendidoPor;
            }
            await updateDoc(ref, updatedDoc);
            querySnapshot = await getDoc(doc(db, "chats", id));
            return res.status(200).send({
                ok: true,
                chat: { ...querySnapshot.data(), id }
            });
        } else {
            return res.status(500).send({
                ok: false,
                errors: [
                    "El chat no se encuentra disponible."
                ]
            });
        }
    } catch (error) {
        return res.status(500).send({
            ok: false,
            errors: [
                "Algo salió mal."
            ]
        });
    }
};

const sendChat = async (req, res) => {
    try {
        const { UserId, 
                chatId,
                userMessage } = req.body;
        let querySnapshot = await getDoc(doc(db, "chats", chatId));
        if (querySnapshot.exists()) {
            console.log("prueba");
            const ref = doc(db, "chats", chatId);
            await updateDoc(ref, {
                mensajes: arrayUnion({
                    enviadoPor: UserId,
                    date: new Date(),
                    mensaje: userMessage
                })
            });
            return res.status(200).send({
                ok: true,
                message: "Enviado con exito."
            });
        } else {
            return res.status(500).send({
                ok: false,
                errors: [
                    "No existe chat con estas caracteristicas."
                ]
            });
        }

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
    setChatState,
    sendChat
};