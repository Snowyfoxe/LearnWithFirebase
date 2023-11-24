// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// apiKey: Public API key to interact with Firebase services
// authDomain: URL used for user authentication services
// projectId: Project ID for your Firebase application
// storageBucket: URL for file storage within your application
// messagingSenderId: Sender ID for sending messages via Firebase Cloud Messaging
// appId: Application ID for the Firebase app, it is unique to this application

// STEP 1: Declare Firebase Environment Variables  
const firebaseConfig = {
  apiKey: "AIzaSyBKYBO8Y1LLq8qWw_qfb75MoIYXB8IPAfM",
  authDomain: "fir-workshop-aae3b.firebaseapp.com",
  projectId: "fir-workshop-aae3b",
  storageBucket: "fir-workshop-aae3b.appspot.com",
  messagingSenderId: "178781218362",
  appId: "1:178781218362:web:b19a7acfdec8bc26d37703"
};


// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
