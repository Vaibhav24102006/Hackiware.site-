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
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Check if user profile exists, create if not
      const existingProfile = await getUserByUid(firebaseUser.uid);
      if (!existingProfile) {
        await createUserProfile({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || "User",
          email: firebaseUser.email || "",
          role: "member",
        });
      }
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  const loginWithGithub = async (): Promise<void> => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Check if user profile exists, create if not
      const existingProfile = await getUserByUid(firebaseUser.uid);
      if (!existingProfile) {
        await createUserProfile({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || "User",
          email: firebaseUser.email || "",
          role: "member",
        });
      }
    } catch (error) {
      console.error("GitHub login error:", error);
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

