//configurando a conexao com o bado de dados
const knex = require('knex')
const configurationDb = require('../../knexfile')
const connectionDb = knex(configurationDb.development)

module.exports = connectionDb