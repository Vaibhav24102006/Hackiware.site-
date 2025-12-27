import {
  createDocument,
  getDocumentById,
  getAllDocuments,
  updateDocument,
  COLLECTIONS,
} from "../firestore";
import { User, CreateUserData } from "../types";
import { Timestamp } from "firebase/firestore";

/**
 * Create a new user profile in Firestore
 */
export const createUserProfile = async (
  userData: CreateUserData
): Promise<string> => {
  const userDoc: Omit<User, "id"> = {
    ...userData,
    joinedAt: Timestamp.now(),
  };
  return await createDocument(COLLECTIONS.USERS, userDoc);
};

/**
 * Get user by document ID
 */
export const getUserById = async (userId: string): Promise<User | null> => {
  return await getDocumentById<User>(COLLECTIONS.USERS, userId);
};

/**
 * Get user by Firebase Auth UID
 */
export const getUserByUid = async (uid: string): Promise<User | null> => {
  const users = await getAllDocuments<User>(COLLECTIONS.USERS);
  return users.find((user) => user.uid === uid) || null;
};

/**
 * Get all users
 */
export const getAllUsers = async (): Promise<User[]> => {
  return await getAllDocuments<User>(COLLECTIONS.USERS);
};

/**
 * Update user profile
 */
export const updateUserProfile = async (
  userId: string,
  updates: Partial<Omit<User, "id" | "uid" | "joinedAt" | "createdAt">>
): Promise<void> => {
  await updateDocument(COLLECTIONS.USERS, userId, updates);
};

