const { Router } = require("express");
const { getWishlistByUser, saveDoc, removeDoc } = require("../controllers/wishlist");

const router = Router();

router.get("/by-user/:uid", getWishlistByUser);
router.post("/save-as-wish", saveDoc);
router.delete("/remove-from-wish", removeDoc);

module.exports = router;