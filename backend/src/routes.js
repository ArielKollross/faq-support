const express = require('express')

const clientQuestionController = require('./controllres/clientQuestionController')

const routes = express.Router()

routes.get('/cadastro', clientQuestionController.index)
routes.post('/cadastro', clientQuestionController.create)

// para deixar as rotas disponiveis para os outros arquivos, ou seja
// para podermos importar no index.js
module.exports = routes