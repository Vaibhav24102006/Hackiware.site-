import {
  createDocument,
  getDocumentById,
  getAllDocuments,
  updateDocument,
  COLLECTIONS,
} from "../firestore";
import { Post, CreatePostData } from "../types";
import { query, where, orderBy } from "firebase/firestore";

/**
 * Create a new post
 */
export const createPost = async (postData: CreatePostData): Promise<string> => {
  return await createDocument(COLLECTIONS.POSTS, postData);
};

/**
 * Get post by ID
 */
export const getPostById = async (postId: string): Promise<Post | null> => {
  return await getDocumentById<Post>(COLLECTIONS.POSTS, postId);
};

/**
 * Get all published posts, optionally filtered by type
 */
export const getPublishedPosts = async (
  type?: "blog" | "achievement"
): Promise<Post[]> => {
  const constraints = [];

  if (type) {
    constraints.push(where("type", "==", type));
  }

  constraints.push(orderBy("publishedAt", "desc"));

  return await getAllDocuments<Post>(COLLECTIONS.POSTS, constraints);
};

/**
 * Get all blog posts
 */
export const getBlogPosts = async (): Promise<Post[]> => {
  return await getPublishedPosts("blog");
};

/**
 * Get all achievement posts
 */
export const getAchievementPosts = async (): Promise<Post[]> => {
  return await getPublishedPosts("achievement");
};

/**
 * Get posts by author
 */
export const getPostsByAuthor = async (authorId: string): Promise<Post[]> => {
  const constraints = [
    where("authorId", "==", authorId),
    orderBy("publishedAt", "desc"),
  ];
  return await getAllDocuments<Post>(COLLECTIONS.POSTS, constraints);
};

/**
 * Update post
 */
export const updatePost = async (
  postId: string,
  updates: Partial<Omit<Post, "id" | "createdAt">>
): Promise<void> => {
  await updateDocument(COLLECTIONS.POSTS, postId, updates);
};

