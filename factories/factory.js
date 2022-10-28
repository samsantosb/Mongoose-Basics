const { Service } = require('../services/service');
const { Repository } = require('../repositories/repository');
const { Controller } = require('../controllers/controller');
const { Team } = require('../models/model');

//factory instancia o service e o repository
//é um padrão comum de códigos
function factory() {
    const repository = new Repository(Team);
    const service = new Service(repository);
    const controller = new Controller(service);

    return controller;
}

const controller = factory();

module.exports = { controller };

