import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUr4HKRZGKAJBKFTygn6zUpGbz0neLc9w",
  authDomain: "bike-finder-1121a.firebaseapp.com",
  projectId: "bike-finder-1121a",
  storageBucket: "bike-finder-1121a.appspot.com",
  messagingSenderId: "711220348375",
  appId: "1:711220348375:web:847cc17afc0a5c0170f792",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const authService = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
