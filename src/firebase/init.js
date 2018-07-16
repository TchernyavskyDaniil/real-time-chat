import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "SECRET KEY",
  authDomain: "chat-vue-ninja.firebaseapp.com",
  databaseURL: "https://chat-vue-ninja.firebaseio.com",
  projectId: "chat-vue-ninja",
  storageBucket: "chat-vue-ninja.appspot.com",
  messagingSenderId: "SECRET"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore()
