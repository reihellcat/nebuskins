const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "https://nebuskins-app.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");