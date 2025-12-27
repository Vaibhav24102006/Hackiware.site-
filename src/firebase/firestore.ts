import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  QueryConstraint,
} from "firebase/firestore";

// Re-export Firestore types for convenience
export type { Timestamp } from "firebase/firestore";

// Collection names
export const COLLECTIONS = {
  USERS: "users",
  EVENTS: "events",
  POSTS: "posts",
} as const;

// Generic Firestore helpers
export const getCollection = (collectionName: string) => {
  return collection(db, collectionName);
};

export const getDocument = (collectionName: string, docId: string) => {
  return doc(db, collectionName, docId);
};

export const createDocument = async <T extends object>(
  collectionName: string,
  data: T
) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error(`Error creating document in ${collectionName}:`, error);
    throw error;
  }
};

export const getDocumentById = async <T>(
  collectionName: string,
  docId: string
): Promise<T | null> => {
  try {
    const docRef = getDocument(collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as T;
    }
    return null;
  } catch (error) {
    console.error(`Error getting document ${docId} from ${collectionName}:`, error);
    throw error;
  }
};

export const getAllDocuments = async <T>(
  collectionName: string,
  constraints?: QueryConstraint[]
): Promise<T[]> => {
  try {
    const collectionRef = getCollection(collectionName);
    const q = constraints
      ? query(collectionRef, ...constraints)
      : query(collectionRef);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as T[];
  } catch (error) {
    console.error(`Error getting documents from ${collectionName}:`, error);
    throw error;
  }
};

export const updateDocument = async <T extends object>(
  collectionName: string,
  docId: string,
  data: Partial<T>
) => {
  try {
    const docRef = getDocument(collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
  } catch (error) {
    console.error(`Error updating document ${docId} in ${collectionName}:`, error);
    throw error;
  }
};

export const deleteDocument = async (collectionName: string, docId: string) => {
  try {
    const docRef = getDocument(collectionName, docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(`Error deleting document ${docId} from ${collectionName}:`, error);
    throw error;
  }
};

