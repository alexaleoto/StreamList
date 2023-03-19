// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFI-U5ewcxPbO7T91w5C2NziMbuSEYtv8",
  authDomain: "streamlist-42451.firebaseapp.com",
  databaseURL: "https://streamlist-42451-default-rtdb.firebaseio.com",
  projectId: "streamlist-42451",
  storageBucket: "streamlist-42451.appspot.com",
  messagingSenderId: "317354407685",
  appId: "1:317354407685:web:2c14cc36fc5a395f96a96c",
  measurementId: "G-K89WQQ36C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

firebase.initializeApp({
    // Your Firebase configuration object goes here
  });