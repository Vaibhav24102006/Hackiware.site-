import { Timestamp } from "firebase/firestore";

// User types
export interface User {
  id?: string;
  uid: string;
  name: string;
  email: string;
  role: "member" | "admin";
  joinedAt: Timestamp;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface CreateUserData {
  uid: string;
  name: string;
  email: string;
  role: "member" | "admin";
}

// Event types
export interface Event {
  id?: string;
  title: string;
  description: string;
  date: Timestamp;
  status: "upcoming" | "completed";
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

export interface CreateEventData {
  title: string;
  description: string;
  date: Timestamp;
  status: "upcoming" | "completed";
}

// Post types
export interface Post {
  id?: string;
  title: string;
  content: string;
  type: "blog" | "achievement";
  authorId: string;
  publishedAt: Timestamp;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface CreatePostData {
  title: string;
  content: string;
  type: "blog" | "achievement";
  authorId: string;
  publishedAt: Timestamp;
}

