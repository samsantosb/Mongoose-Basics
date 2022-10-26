const { Team } = require("../models/model");
const { mongoConnect, mongoDisconnect } = require("./mongo.connect");

async function seed() {
    //aqui chamamos a função de conexão
    mongoConnect();

    const teamsArray = [
        {
            name: 'Vasco da Gama',
            city: 'Rio de Janeiro',
            colours: ['White', 'Black'],
            mascot: 'Cascão',
            trainer: 'Cristóvão Borges',
            stadium: 'São Januário'
        },
        {
            name: 'Cruzeiro',
            city: 'Belo Horizonte',
            colours: ['White', 'Blue'],
            mascot: 'Rapozão Bolado',
            trainer: 'Mano Menezes',
            stadium: 'Mineirão'
        },
        {
            name: 'Ibis',
            city: 'São Paulo',
            colours: ['White', 'Black'],
            mascot: 'Ibis',
            trainer: 'Ibis',
            stadium: 'Ibis'
        },
        {
            name: 'Atletico Mineiro',
            city: 'Belo Horizonte',
            colours: ['White', 'Black'],
            mascot: 'Galo',
            trainer: 'Roger Machado',
        },
        {
            name: 'Corinthians',
            city: 'São Paulo',
            colours: ['White', 'Black'],
            mascot: 'Timão',
            trainer: 'Fábio Carille',
            stadium: 'Arena Corinthians'
        },
        {
            name: 'Ceará',
            city: 'Fortaleza',
            colours: ['White', 'Black'],
            mascot: 'Vozão',
            trainer: 'Guto Ferreira',
            stadium: 'Castelão'
        },
        {
            name: 'Goiás',
            city: 'Goiânia',
            colours: ['White', 'Black'],
            mascot: 'Esmeraldino',
            trainer: 'Felipão',
            stadium: 'Serra Dourada'
        },
        {
            name: 'Internacional',
            city: 'Porto Alegre',
            colours: ['White', 'Black'],
            mascot: 'Colorado',
            trainer: 'Odair Hellmann',
            stadium: 'Beira Rio'
        },
    ];

    await Team.insertMany(teamsArray)

    //aqui chamamos a função de desconexão
    await mongoDisconnect();
}
seed();