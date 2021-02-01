import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDfpQyh2wqEiOt0fyh3Z0VBQ0axoec8VMg",
    authDomain: "base-site-9d9ec.firebaseapp.com",
    projectId: "base-site-9d9ec",
    storageBucket: "base-site-9d9ec.appspot.com",
    messagingSenderId: "331744091866",
    appId: "1:331744091866:web:df873875f7b8e6174dcfe3",
    measurementId: "G-RCHJM6GPGX"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;