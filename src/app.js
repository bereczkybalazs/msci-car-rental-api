const express = require('express');
const app = express();
const port = 3000;
const cars = require('./modules/car/car-controller');

app.get('/', (req, res) => cars.get(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
