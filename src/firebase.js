import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env
//     .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA0i3i9DD2X4svgHIWV-7gWlMbckQ5PAcw",
  authDomain: "food-delivery-app-81063.firebaseapp.com",
  projectId: "food-delivery-app-81063",
  storageBucket: "food-delivery-app-81063.firebasestorage.app",
  messagingSenderId: "991498851460",
  appId: "1:991498851460:web:b60930496aef252b80ded1",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, firestore, storage, auth };
