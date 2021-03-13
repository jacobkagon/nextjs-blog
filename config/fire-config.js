  import firebase from "firebase";

    

const firebaseConfig = {
  apiKey: "AIzaSyBhbWTmCBmQOj2MnER8B4u_8LrJdYEjEHc",
  authDomain: "blogapp-c72f6.firebaseapp.com",
  projectId: "blogapp-c72f6",
  storageBucket: "blogapp-c72f6.appspot.com",
  messagingSenderId: "313434945566",
  appId: "1:313434945566:web:d5b24f834a48b16959560f"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
