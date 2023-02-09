const express = require("express");
const Router = express.Router();

const listarTodasConsultas = require('../controller/consulta/read-all-consultas')

Router.get('/tarefas', listarTodasConsultas)

Router.get('/', (req, res) => {
    return res.json([{
        sucess: true,
        message: "Sucesso!"
    }])
})

module.exports = Router;