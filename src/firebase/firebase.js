// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfcpGbuM-Vk6KvfKI5nQY9fqCH11JjyWU",
  authDomain: "fir-blog-8da57.firebaseapp.com",
  projectId: "fir-blog-8da57",
  storageBucket: "fir-blog-8da57.firebasestorage.app",
  messagingSenderId: "1027529041366",
  appId: "1:1027529041366:web:2dafcc817638b972923077",
  measurementId: "G-VG49V6ZJ2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider;
export const storage = getStorage();
export const db = getFirestore();