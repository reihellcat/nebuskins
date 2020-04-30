import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDXd6SmSqgk9QuQ1iinE3H4pllVQeHU6l4",
    authDomain: "nebuskins-app.firebaseapp.com",
    databaseURL: "https://nebuskins-app.firebaseio.com",
    projectId: "nebuskins-app",
    storageBucket: "nebuskins-app.appspot.com",
    messagingSenderId: "187465077436",
    appId: "1:187465077436:web:31c639de854663bc3bf6b9"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  const storage = firebase.storage();
  // лучше так делать:
  // export const storage = firebase.storage()

  export {
    storage, firebase as default
  };