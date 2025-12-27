import { app } from "./firebase";
import { getAuth, Auth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Initialize Firebase Auth
let auth: Auth;

try {
  auth = getAuth(app);
  
  // Set session persistence to browser local storage
  // This keeps users logged in across browser sessions
  setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Error setting auth persistence:", error);
  });
} catch (error) {
  console.error("Firebase Auth initialization error:", error);
  throw error;
}

export { auth };
export default auth;

