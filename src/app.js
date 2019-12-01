const express = require('express');
const cars = require('./modules/car/car-controller');

const app = express();
const port = 3000;

app.get('/', (req, res) => cars.get(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
