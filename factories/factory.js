const { Service } = require('../services/service');
const { Repository } = require('../repositories/repository');
const { Team } = require('../models/model');

//factory instancia o service e o repository
//é um padrão comum de códigos
function factory() {
    const repository = new Repository(Team);
    const service = new Service(repository);

    return service;
}

const service = factory();

module.exports = { service };

