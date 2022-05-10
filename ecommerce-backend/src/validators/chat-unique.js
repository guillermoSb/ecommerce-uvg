const { collection, query, where, getDocs } = require("firebase/firestore");
const { db } = require("../firebase");

/**
 * Validates if the user already has a chat that is active
 */
const chatUniqueValidator = async (userId) => {
    // Get active chats or waiting for that user
    const chatsRef = collection(db, "chats");
    const chatQuery = query(chatsRef, where("iniciadoPor", "==", userId), where("estado", "in", ["espera", "activo"]))
    const docs = await getDocs(chatQuery);
    if (docs.size > 0) {
        throw new Error("Ya existe un chat en espera o activo para ese usuario. No se puede crear uno nuevo.");
    }
    return true;
    // If count is > 0, then return false
    // If count is <= 0 then return true
};

module.exports = {
    chatUniqueValidator
};