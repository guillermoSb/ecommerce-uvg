

const { validationResult } = require("express-validator");


const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            ok: false,
            errors: errors.array({ onlyFirstError: true }).flatMap(err => err.msg) ?? []
        });
    }
    next();
};


const validateState= async (state) => {
    const states = ["espera","activo"];
    if (!isNaN(state) && !states.includes(state)) {
        throw new Error(`El perfil ${state} no existe.`);
    }
};


module.exports = { validateFields, validateState };