const {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  doc,
} = require("firebase/firestore");
const { db } = require("../firebase");

const getWishlistByUser = async (req, res) => {
  const { uid } = req.params;
  try {
    const querySnapshot = await getDocs(query(collection(db, "wishlist"), where("usercode", "==", uid)));
    if(querySnapshot.docs.map((doc) => doc.data()))
    return res.status(200).send({
      ok: true,
      wishlist: querySnapshot.docs.map((doc) => doc.data()),
    });
  } catch (error) {
    return res.status(500).send({
      ok: false,
      errors: ["Algo salió mal."],
    });
  }
}

module.exports = {
  getWishlistByUser
}