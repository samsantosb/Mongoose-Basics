const { mongoConnect } = require('./db/mongo.connect');
const { router } = require('./routes/routes');
const { mongoKey } = require('./config');

mongoConnect(mongoKey);
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
