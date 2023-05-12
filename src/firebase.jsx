import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7gfJAbOiUZzC1TxsBUfMU31LOKCWpBcQ",
  authDomain: "sacred-evening-231617.firebaseapp.com",
  projectId: "sacred-evening-231617",
  storageBucket: "sacred-evening-231617.appspot.com",
  messagingSenderId: "33250793362",
  appId: "1:33250793362:web:c5c10ef470937fbf94534b",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
