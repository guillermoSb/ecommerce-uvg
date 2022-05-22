/* 
- Nombre -> Axel 
- Categoria -> Luis P 
- Calificacion -> Estuardo 


 */

const { collection, getDocs, addDoc, query, where, updateDoc, doc, Timestamp } = require("firebase/firestore");
const { db } = require("../firebase");

const getRecomendationByName = (req, res) => {

};

const getRecomendationByCategory = async (req, res) => {
    const {categoria} = req.body;
    try {
        const querySnapshot = await getDocs(query(collection(db, "inventario"), where("categoria", "==", categoria))) ;
        return res.status(200).send({   
            ok: true,
            productos: querySnapshot.docs.map((doc) => doc.data())
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
/* 
AQUI hacen sus funciones
*/
module.exports = {
    getRecomendationByName,
    getRecomendationByCategory
};
/* 
aqui las exportan
*/