import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADwhzo0GarEsznQokahsDYlGo7D3hcvrw",
  authDomain: "goit-react-native-projec-a6161.firebaseapp.com",
  projectId: "goit-react-native-projec-a6161",
  storageBucket: "goit-react-native-projec-a6161.appspot.com",
  messagingSenderId: "68334954039",
  appId: "1:68334954039:web:b50771abb03d023e02c1b2",
  measurementId: "G-13MHZJM12F",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
