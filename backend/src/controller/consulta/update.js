const consultas = require('../../model/regis-consulta')

const EditarTarefa = async (req, res) => {

    const { id, titulo, descricao, data } = req.body

    try {
        const listarConsultas = await consultas.update({ titulo, descricao, data }, { where: { id: id } })
        return res.status(200).send({ sucess: "Tarefa editada com sucesso" });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }

}

module.exports = EditarTarefa;