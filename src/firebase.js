import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
// import 'firebase/compatt/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD3XPRMzTGcV6LOYriAsgnALbc0SZ43RM",
  authDomain: "play-tube-clone.firebaseapp.com",
  projectId: "play-tube-clone",
  storageBucket: "play-tube-clone.appspot.com",
  messagingSenderId: "1051133794351",
  appId: "1:1051133794351:web:4b38ba7bb1f23588e0ceda"
};


firebase.initializeApp(firebaseConfig)

export default firebase.auth()