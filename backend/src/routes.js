const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({
        msg: 'oi',
    })
})

// para deixar as rotas disponiveis para os outros arquivos, ou seja
// para podermos importar no index.js
module.exports = routes