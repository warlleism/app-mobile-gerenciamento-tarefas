const consultas = require('../../model/regis-consulta')

const listarTodasConsultas = async (req, res) => {
    try {
        const listarConsultas = await consultas.findAll()
        return res.status(200).send(listarConsultas);
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err });
    }
}

module.exports = listarTodasConsultas;