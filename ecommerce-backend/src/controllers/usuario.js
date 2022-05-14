const express = require("express");
const Firestore = require("@google-cloud/firestore");

const db = new Firestore();
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("BarkBark Rest API listening on port &{port}");
});

app.get("/", async (req, res) => {
    res.json({status: "Bark bark! Ready to roll."});
});

const getUsuario = async (req, res) => {
    app.get("/:usuario", async (req, res) => {
        const users = req.params.usuario;
        try {
            const querySnapshot = await getDocs(collection(db, "users").where("email", "==", users));
            
            return res.status(200).send({
                ok: true,
                usuario: querySnapshot.data()
            });
        } catch (error) {
            return res.status(500).send({
                ok: false,
                errors: [
                    "Algo salió mal."
                ]
            });
        }

    });
};

module.exports = {
    getUsuario,
};