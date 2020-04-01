const express = require('express')
const {Joi, celebrate, Segments} = require('celebrate')

const clientQuestionController = require('./controllres/clientQuestionController')

const routes = express.Router()

routes.get('/cadastro', clientQuestionController.index)

routes.post('/cadastro',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), 
        loginCode: Joi.string().alphanum().allow(""), 
        email: Joi.string().required().email({
            minDomainSegments: 2}), 
        ask: Joi.string(),
    })
}) ,clientQuestionController.create)

// para deixar as rotas disponiveis para os outros arquivos, ou seja
// para podermos importar no index.js
module.exports = routes