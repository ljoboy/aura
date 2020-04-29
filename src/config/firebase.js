import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCGjN2xc1OU1RTmGeuYX_xdrKrchnPLTFU",
  authDomain: "gdg-lubumbashi-site.firebaseapp.com",
  databaseURL: "https://gdg-lubumbashi-site.firebaseio.com",
  projectId: "gdg-lubumbashi-site",
  storageBucket: "gdg-lubumbashi-site.appspot.com",
  messagingSenderId: "879926740587",
  appId: "1:879926740587:web:78e5f34ada633c47bd532e"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};
