const consultas = require('../../model/regis-consulta')

const DeletarTarefa = async (req, res) => {

    const { id } = req.body

    try {
        const listarConsultas = await consultas.destroy({ where: { id: id } })
        return res.status(200).send({ sucess: "Tarefa deletada com sucesso" });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }

}

module.exports = DeletarTarefa;