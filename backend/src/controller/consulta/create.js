const consultas = require('../../model/regis-consulta')

const CriarNovaTarefa = async (req, res) => {

    const { titulo, descricao, data } = req.body

    try {
        const listarConsultas = await consultas.create({ titulo, descricao, data })
        return res.status(200).send({sucess: "Tarefa criada com sucesso"});
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }

}

module.exports = CriarNovaTarefa;