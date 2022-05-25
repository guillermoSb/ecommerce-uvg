const { Router } = require("express");
const { getWishlistByUser } = require("../controllers/wishlist");

const router = Router();

router.get("/by-user/:uid", getWishlistByUser);

module.exports = router;