const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send(JSON.stringify({'testing': 'worked'}));
});

app.listen(5000, () => {
    console.log("App online");
});