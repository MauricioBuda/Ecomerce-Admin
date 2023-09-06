import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC6JY___bZWFe_dq0tNhZYsdjWCAucXwuY",
  authDomain: "proyectoreact-d3963.firebaseapp.com",
  projectId: "proyectoreact-d3963",
  storageBucket: "proyectoreact-d3963.appspot.com",
  messagingSenderId: "6347135833",
  appId: "1:6347135833:web:6b7edab8d20bfb3391ca48"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)