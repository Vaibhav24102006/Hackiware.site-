import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/auth";
import { createUserProfile, getUserByUid } from "../firebase/services/users";

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  register: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const register = async (email: string, password: string, name: string): Promise<void> => {
    try {
      // Diagnostic logging: show current Firebase project and authDomain
      const regProjectId = (auth as any)?.app?.options?.projectId;
      const regAuthDomain = (auth as any)?.app?.options?.authDomain;
      console.debug("[AUTH DEBUG] register() - Firebase config:", { projectId: regProjectId, authDomain: regAuthDomain });
      // Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Create Firestore user profile
      await createUserProfile({
        uid: firebaseUser.uid,
        name,
        email,
        role: "member",
      });
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const loginWithGoogle = async (): Promise<void> => {
    try {
      // Diagnostic logging: expose the Firebase project + provider metadata before calling the popup
      const projectId = (auth as any)?.app?.options?.projectId;
      const authDomain = (auth as any)?.app?.options?.authDomain;
      console.debug("[AUTH DEBUG] loginWithGoogle() - Firebase config:", { projectId, authDomain });

      const provider = new GoogleAuthProvider();
      console.debug("[AUTH DEBUG] loginWithGoogle() - provider:", { providerId: (GoogleAuthProvider as any).PROVIDER_ID, provider });
      console.debug("[AUTH DEBUG] Calling signInWithPopup (Google)");

      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Check if user profile exists, create if not
      // Firestore write is isolated - won't fail auth if it errors
      try {
        const existingProfile = await getUserByUid(firebaseUser.uid);
        if (!existingProfile) {
          await createUserProfile({
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || "User",
            email: firebaseUser.email || "",
            role: "member",
          });
        }
      } catch (firestoreError: any) {
        // Log Firestore error but don't fail auth
        console.error("Firestore profile creation error (non-blocking):", firestoreError);
        console.error("Firestore error code:", firestoreError?.code);
        console.error("Firestore error message:", firestoreError?.message);
      }
    } catch (error: any) {
      // Comprehensive error logging
      console.error("=== GOOGLE AUTH ERROR (AuthContext) ===");
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Error full object:", error);
      if (error.customData) {
        console.error("Custom data:", error.customData);
        console.error("Custom data email:", error.customData?.email);
      }
      if (error.credential) {
        console.error("Credential:", error.credential);
      }
      console.error("=======================================");
      throw error;
    }
  };

  const loginWithGithub = async (): Promise<void> => {
    try {
      // Diagnostic logging: expose the Firebase project + provider metadata before calling the popup
      const projectId = (auth as any)?.app?.options?.projectId;
      const authDomain = (auth as any)?.app?.options?.authDomain;
      console.debug("[AUTH DEBUG] loginWithGithub() - Firebase config:", { projectId, authDomain });

      const provider = new GithubAuthProvider();
      console.debug("[AUTH DEBUG] loginWithGithub() - provider:", { providerId: (GithubAuthProvider as any).PROVIDER_ID, provider });
      console.debug("[AUTH DEBUG] Calling signInWithPopup (GitHub)");

      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Check if user profile exists, create if not
      // Firestore write is isolated - won't fail auth if it errors
      try {
        const existingProfile = await getUserByUid(firebaseUser.uid);
        if (!existingProfile) {
          await createUserProfile({
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || "User",
            email: firebaseUser.email || "",
            role: "member",
          });
        }
      } catch (firestoreError: any) {
        // Log Firestore error but don't fail auth
        console.error("Firestore profile creation error (non-blocking):", firestoreError);
        console.error("Firestore error code:", firestoreError?.code);
        console.error("Firestore error message:", firestoreError?.message);
      }
    } catch (error: any) {
      // Comprehensive error logging
      console.error("=== GITHUB AUTH ERROR (AuthContext) ===");
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Error full object:", error);
      if (error.customData) {
        console.error("Custom data:", error.customData);
        console.error("Custom data email:", error.customData?.email);
      }
      if (error.credential) {
        console.error("Credential:", error.credential);
      }
      console.error("=======================================");
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    register,
    login,
    loginWithGoogle,
    loginWithGithub,
    logout,
  };

  // Prevent UI flicker by not rendering children until auth state is determined
  if (loading) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

