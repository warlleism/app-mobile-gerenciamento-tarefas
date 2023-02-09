const { Model, DataTypes } = require('sequelize')

class Tarefas extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            descricao: DataTypes.STRING,
            data: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Tarefas;