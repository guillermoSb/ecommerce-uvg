const { collection, getDocs, addDoc, query, where, updateDoc, doc } = require("firebase/firestore");
const { db } = require("../firebase");


const getRecomendationByName = async (req, res) => {
        const { nombre } = req.params;

        const q = query(collection(db, "inventario"), where('nombre', '>=', nombre), where('nombre', '<', nombre + 'z'));
        const querySnapshot = await getDocs(q);

        return res.status(200).send({
            ok: true,
            productos: querySnapshot.docs.map((doc) => {
                const d = doc.data();
                d.fecha = d.fecha.toDate();
                return ( d );
            })
        });
}

module.exports = {
    getRecomendationByName
};