const functions = require("firebase-functions");
const admin = require('firebase-admin')//nos ayuda para mas herramietas
const serviceAccount = require('./config/durable-jet-331923-firebase-adminsdk-iddm9-f963adef61.json') 
const createUser = require('./createUser')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

exports.createUser = functions.https.onRequest(createUser)
