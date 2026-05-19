const Sequelize = require('sequelize');

const seqzuelize = new Sequelize('node-complete', 'root', '2320', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;