//funções e objetos nativos da mongoose, uma nova bibilioteca
//de banco de dados
const { connect, connection } = require('mongoose');

//aqui esta o import do .env
require('dotenv').config();

//aqui esta a nossa chave de conexão
const mongo = process.env.MONGO;

function mongoConnect() {
    //criamos aqui uma função que se conecta no banco de dados
    connect(mongo);
    connection.on('error', () => {
        console.log('Error connecting to MongoDB')
    });
    connection.once('open', () => {
        console.log('Connected to MongoDB');
    });
}

async function mongoDisconnect() {
    //criamos aqui uma função que se desconecta do banco de dados
    await connection.close();
    console.log('Disconnected from MongoDB');
}

//podemos especificar o banco de dados aqui nesse arquivo

module.exports = { mongoConnect, mongoDisconnect };