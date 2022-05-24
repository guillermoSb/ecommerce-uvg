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

const getRecomendationByRating = async (req, res) => {
  try {
    const { calificacion } = req.params;
    const que = query(
      collection(db, "inventario"),
      where("calificacion", "==", calificacion)
    );
    const querySnapshot = await getDocs(que);
    return res.status(200).send({
      ok: true,
      productos: querySnapshot.docs.map((doc) => doc.data()),
    });
  } catch (error) {
    return res.status(500).send({
      ok: false,
      errors: ["Algo salió mal."],
    });
  }
};

const getRecomendationByName = async (req, res) => {
  const { nombre } = req.params;
  const q = query(
    collection(db, "inventario"),
    where("nombre", ">=", nombre),
    where("nombre", "<", nombre + "z")
  );
  const querySnapshot = await getDocs(q);
  return res.status(200).send({
    ok: true,
    productos: querySnapshot.docs.map((doc) => {
      const d = doc.data();
      d.fecha = d.fecha.toDate();
      return d;
    }),
  });
};

const getRecomendationByCategory = async (req, res) => {
  const { categoria } = req.body;
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "inventario"), where("categoria", "==", categoria))
    );
    return res.status(200).send({
      ok: true,
      productos: querySnapshot.docs.map((doc) => doc.data()),
    });
  } catch (error) {
    return res.status(500).send({
      ok: false,
      errors: ["Algo salió mal."],
    });
  }
};
/* 
AQUI hacen sus funciones
*/
module.exports = {
  getRecomendationByName,
  getRecomendationByCategory,
  getRecomendationByRating,
};
/* 
aqui las exportan
*/
