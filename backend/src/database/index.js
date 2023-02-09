const sequelize = require("sequelize");
const config = require("../config/config");
const tarefas = require('../model/regis-consulta')

const connection = new sequelize(config);

tarefas.init(connection);

module.exports = connection;