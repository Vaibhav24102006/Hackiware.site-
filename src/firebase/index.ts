// Main Firebase exports
export { app, db } from "./firebase";
export { default } from "./firebase";

// Auth exports
export { auth } from "./auth";
export { default as authInstance } from "./auth";

// Firestore utilities
export * from "./firestore";

// Types
export * from "./types";

// Services
export * from "./services/users";
export * from "./services/events";
export * from "./services/posts";

