import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyACq8Kzmw9-rC7LTbREaRtMOs0vPiPtA1o",
    authDomain: "emprego-bd.firebaseapp.com",
    databaseURL: "https://emprego-bd-default-rtdb.firebaseio.com",
    projectId: "emprego-bd",
    storageBucket: "emprego-bd.appspot.com",
    messagingSenderId: "1040383289408",
    appId: "1:1040383289408:web:d6fee69523905dd3a857a5",
    measurementId: "G-GXSVCH0HNR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database()

var storage = firebase.storage()

export {storage, database};