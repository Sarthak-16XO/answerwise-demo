// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB_FiRssepZI-8IVeau0E4HYgTOoG9bLJE",
  authDomain: "matrimony-951fa.firebaseapp.com",
  projectId: "matrimony-951fa",
  storageBucket: "matrimony-951fa.appspot.com",
  messagingSenderId: "887109996981",
  appId: "1:887109996981:web:598d43362a2ee7472509fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;