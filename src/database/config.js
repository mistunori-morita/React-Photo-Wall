import * as firebase from 'firebase'  
  
  var config = {
    apiKey: "AIzaSyAdN_a_XujlBaZ7PU2U687Jg2B8B6yQ84g",
    authDomain: "photowall-4b610.firebaseapp.com",
    databaseURL: "https://photowall-4b610.firebaseio.com",
    projectId: "photowall-4b610",
    storageBucket: "photowall-4b610.appspot.com",
    messagingSenderId: "798002367951"
  }

firebase.initializeApp(config)

const database = firebase.database()


export default {database}