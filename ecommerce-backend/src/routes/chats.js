const { Router } = require('express');
const { getAllChats } = require('../controllers/chats');

const router = Router();

router.get('/', getAllChats);

module.exports = router;