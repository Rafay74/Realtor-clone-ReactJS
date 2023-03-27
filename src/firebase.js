// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARGauE0B5JW_kZS4EK1UN0D2p94PNSgOk",
    authDomain: "realtor-clone-react-e93d0.firebaseapp.com",
    projectId: "realtor-clone-react-e93d0",
    storageBucket: "realtor-clone-react-e93d0.appspot.com",
    messagingSenderId: "348116354329",
    appId: "1:348116354329:web:1ff266b264efdb29713188",
    measurementId: "G-D685Q0VJHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()
