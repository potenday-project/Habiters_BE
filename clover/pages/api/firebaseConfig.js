import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3FeIl2plQFBpnqltN_et7rGdOblNvqgE",
  authDomain: "hae-ma.firebaseapp.com",
  databaseURL:
    "https://hae-ma-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hae-ma",
  storageBucket: "hae-ma.appspot.com",
  messagingSenderId: "831224162773",
  appId: "1:831224162773:web:4e4fe2dd466094ff23b55c",
};
export const fbAuth = getAuth(initializeApp(firebaseConfig));
export const db = getFirestore(initializeApp(firebaseConfig));
