

/**
 * Get all chats
 * @param {*} req 
 * @param {*} res 
 */
const getAllChats = (req, res) => {
    return res.status(200).send({
        ok: true,
        chats: []
    })
}

module.exports = {
    getAllChats
}