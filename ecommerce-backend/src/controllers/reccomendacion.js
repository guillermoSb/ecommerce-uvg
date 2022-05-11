/* 
- Nombre -> Axel 
- Categoria -> Luis P 
- Calificacion -> Estuardo 


 */


const getRecomendationByName = (req, res) => {

    return res.status(200).send({
        ok: true,
        chats: []
    });
};
/* 
AQUI hacen sus funciones
*/
module.exports = {
    getRecomendationByName
};
/* 
aqui las exportan
*/