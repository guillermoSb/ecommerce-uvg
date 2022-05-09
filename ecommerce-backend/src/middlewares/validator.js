

const { validationResult } = require("express-validator");


const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            ok: false,
            errors: errors.array({ onlyFirstError: true }).flat(err => err.msg) ?? []
        });
    }
    next();
};


module.exports = { validateFields };