
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALRr19lSUUv0FlVAj03y5gPncb5ljk5X4",
  authDomain: "mail-form-609ce.firebaseapp.com",
  projectId: "mail-form-609ce",
  storageBucket: "mail-form-609ce.appspot.com",
  messagingSenderId: "677848016447",
  appId: "1:677848016447:web:95288a6bd82fd52c03ba8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)