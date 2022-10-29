//funções e objetos nativos da mongoose, uma nova bibilioteca
//de banco de dados
const { connect, connection } = require('mongoose');

function mongoConnect(key) {
    //criamos aqui uma função que se conecta no banco de dados
    connect(key);
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