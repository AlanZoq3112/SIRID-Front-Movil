// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initializeAuth, getReactNativePersistence} from "firebase/auth/react-native";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA6_1iZMjwFBflmiYGwHl6lvQSzMGZSm1A",
	authDomain: "exam2-b45ae.firebaseapp.com",
	projectId: "exam2-b45ae",
	storageBucket: "exam2-b45ae.appspot.com",
	messagingSenderId: "861799283073",
	appId: "1:861799283073:web:85faa98a31e19d80be5080"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});

