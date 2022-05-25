const { collection, getDocs, addDoc, query, where, deleteDoc, doc } = require("firebase/firestore");
const { db } = require("../firebase");

const getWishlistByUser = async (req, res) => {
  const { uid } = req.params;
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "wishlist"), where("usercode", "==", uid))
    );
    if (querySnapshot.docs.map((doc) => doc.data()))
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
};

const saveDoc = async (req, res) => {
  try {
    const { obj } = req.body;
    addDoc(collection(db, "wishlist"), obj);
    return res.status(200).send({
      ok: true,
      msg: "Agregado a la lista de deseos.",
    });
  } catch (err) {
    return res.status(500).send({
      ok: true,
      msg: "Error al guardar.",
    });
  }
};

const removeDoc = async (req, res) => {
  try {
    const { id } = req.body;
    const ref = doc(db, "wishlist", id);
    deleteDoc(ref);
    return res.status(200).send({
      ok: true,
      msg: "Eliminado de la lista de deseos.",
    });
  } catch (err) {
    return res.status(500).send({
      ok: true,
      msg: "Error al eliminar.",
    });
  }
};

module.exports = {
  getWishlistByUser,
  saveDoc,
  removeDoc,
};
