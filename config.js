import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXBUXrsZnwSoge5tqEncXIzmfzvCtRs2c",
  authDomain: "e-ride-24cec.firebaseapp.com",
  projectId: "e-ride-24cec",
  storageBucket: "e-ride-24cec.appspot.com",
  messagingSenderId: "496447874552",
  appId: "1:496447874552:web:1abeeebcd00bf682f5e20d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


