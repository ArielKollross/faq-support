// importando o express para ficar disponivel para uso no arquivo
const express = require('express') 
// importanto as rotas, definida em /src/routs.js
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

const port = 3333
const ip = 'localhost'

app.listen(port, () => {
    return (
        console.log(`Servidor inicializado em : http://${ip}:${port}\nPara cancelar o servidor: ctrl+C`)
    )
})