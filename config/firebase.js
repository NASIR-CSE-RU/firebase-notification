const admin = require("firebase-admin");
const serviceAccount = require("../secret/bablive-b1268-17f244a66395.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
