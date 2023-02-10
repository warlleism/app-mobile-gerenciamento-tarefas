const express = require("express");
const CriarNovaTarefa = require("../controller/consulta/create");
const DeletarTarefa = require("../controller/consulta/delete");
const Router = express.Router();

const listarTodasConsultas = require('../controller/consulta/read-all-consultas');
const EditarTarefa = require("../controller/consulta/update");

Router.get('/tarefas', listarTodasConsultas)
Router.post('/criar', CriarNovaTarefa)
Router.delete('/deletar', DeletarTarefa)
Router.put('/editar', EditarTarefa)

Router.get('/', (req, res) => {
    return res.json([{
        sucess: true,
        message: "Sucesso!"
    }])
})

module.exports = Router;