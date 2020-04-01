const connectionDb = require('../database/connection')

module.exports = {

    async index(request, response) {
        const clientQuestion = await connectionDb('clientQuestion').select('*')

        return response.json(clientQuestion)
    },




    async create(request, response) {

        const { name, loginCode, email, ask } = request.body

        //connection to db and insert data into table
        await connectionDb('clientQuestion').insert({
            name, loginCode, email, ask
        })

        return response.json('sucsses')
    }



}