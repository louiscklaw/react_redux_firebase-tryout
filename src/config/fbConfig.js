import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyAZhvudpgzHr6fHkUetRsj3zq9eUvnlhhs",
  authDomain: "react-redux-firebase-tryout.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-tryout.firebaseio.com",
  projectId: "react-redux-firebase-tryout",
  storageBucket: "react-redux-firebase-tryout.appspot.com",
  messagingSenderId: "671272890612",
  appId: "1:671272890612:web:6788cbe53e8c3c92076ea1",
  measurementId: "G-WHJD3HG653"
};

// Initialize Firebase
firebase.initializeApp( firebaseConfig );
firebase.firestore().settings( {
  timestampsInSnapshots: true
} )

export default firebase