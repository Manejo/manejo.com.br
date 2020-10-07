const Sequelize = require('sequelize');
const databaseConfig = require('../../config/database');

const Trilha = require('../models/modeltrilha');
const Caracteristicas = require('../models/modelcaracteristicas');


const connection = new Sequelize(databaseConfig);

Trilha.init(connection);
Caracteristicas.init(connection);

Trilha.associate(connection.models);
Caracteristicas.associate(connection.models);

module.exports = connection;