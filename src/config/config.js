import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApg9iNQ_kW-iN3W_4nA03c25tQvn8KRsk",
    authDomain: "bmoney-e1afd.firebaseapp.com",
    databaseURL: "https://bmoney-e1afd.firebaseio.com",
    projectId: "bmoney-e1afd",
    storageBucket: "bmoney-e1afd.appspot.com",
    messagingSenderId: "451297065133",
    appId: "1:451297065133:web:4cc86c3d0be7ad8e"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
