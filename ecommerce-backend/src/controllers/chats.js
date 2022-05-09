

/**
 * Get all chats
 * @param {*} req 
 * @param {*} res 
 */
const getAllChats = (req, res) => {
    return res.status(200).send({
        ok: true,
        chats: []
    });
};

/**
 * Create a chat
 * @param {*} req 
 * @param {*} res 
 */
const createChat = (req, res) => {

    return res.status(200).send({
        ok: true,
    });
};

module.exports = {
    getAllChats
};