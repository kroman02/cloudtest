const joi = require('joi')

const registerValidation = (data) => {
    const schemaValidation = joi.object({
        username:joi.string().required().min(3).max(256),
        password:joi.string().required().min(6).max(1024),
        email:joi.string().required().min(6).max(256).email(),
    })
    return schemaValidation.validate(data)
}

const loginValidation = (data) => {
    const schemaValidation = joi.object({
        password:joi.string().required().min(6).max(1024),
        email:joi.string().required().min(6).max(256).email(),
    })
    return schemaValidation.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
