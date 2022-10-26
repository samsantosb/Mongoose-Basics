const { Schema, model } = require('mongoose');

//o new Schema define a estrutura do Objeto que irá popular o banco de dados
//nesse caso é um time com propriedades obrigatorias, unicas ou opcionais
const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    colours: {
        type: [String],
        required: true
    },
    mascot: {
        type: String,
        required: true
    },
    trainer: {
        type: String,
        required: true
    },
    stadium: {
        type: String,
        required: false
    },
});

//team é o nome da collection

//antes instanciavamos com o nome do database e depois o nome da collection
//hoje as definições são feitas no arquivo de models


//as nossas queries de banco de dados estão atribuidas ao objeto Team
const Team = model('Team', teamSchema);


module.exports = { Team }


