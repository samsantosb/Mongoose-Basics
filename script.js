const { mongoConnect, mongoDisconnect } = require('./db/mongo.connect');
const { Team } = require('./models/model');

async function script() {
    //aqui chamamos a função de conexão
    mongoConnect();



    //aqui chamamos a função de desconexão
    await mongoDisconnect();
}

script();