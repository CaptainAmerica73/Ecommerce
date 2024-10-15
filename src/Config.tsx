import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb-fySZj75mrv90eDdhTzpbbRxmqup__0",
  authDomain: "grocery-shop-73425.firebaseapp.com",
  projectId: "grocery-shop-73425",
  storageBucket: "grocery-shop-73425.appspot.com",
  messagingSenderId: "969159833237",
  appId: "1:969159833237:web:badb2facc97dbaa4160d9c",
  measurementId: "G-XVPX8ZBRNR",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const usercol = collection(db, "Users");
export const auth = getAuth(app);
