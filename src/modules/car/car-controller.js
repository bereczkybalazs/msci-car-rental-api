const carModel = require('./car-model');

module.exports = {
  get: (req, res) => {
    carModel.all().then((results) => {
      res.send(results);
    });
  }
};
