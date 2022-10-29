const { Team } = require("../models/model");
const { mongoConnect, mongoDisconnect } = require("./mongo.connect");
const { mongoKey } = require('../config');

async function seed() {
    //aqui chamamos a função de conexão
    mongoConnect(mongoKey);

    const teamsArray = [
        {
            name: 'Palmeiras',
            city: 'São Paulo',
            colours: ['White', 'Black'],
            mascot: 'Pardal',
            trainer: 'Mano Menezes',
            stadium: 'Allianz Parque'
        },
    ];

    await Team.insertMany(teamsArray)

    //aqui chamamos a função de desconexão
    await mongoDisconnect();
}
seed();