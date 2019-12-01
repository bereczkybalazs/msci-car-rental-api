const database = require('./database');

class Model {
  constructor(ref) {
    this.ref = database.ref(ref);
  }
  all() {
    return new Promise((resolve, reject) => {
      this.ref.on("value", function(snapshot) {
        resolve(snapshot.val())
      }, function (errorObject) {
        reject(errorObject.code)
      });

    })
  }
}

module.exports = Model;
