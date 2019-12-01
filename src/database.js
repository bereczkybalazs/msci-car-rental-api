const admin = require("firebase-admin");
const serviceAccount = require("../firebase-credential");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://express-ssr-6e0e3.firebaseio.com"
});

module.exports = admin.database();
