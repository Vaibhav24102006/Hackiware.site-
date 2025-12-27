import {
  createDocument,
  getDocumentById,
  getAllDocuments,
  updateDocument,
  COLLECTIONS,
} from "../firestore";
import { Event, CreateEventData } from "../types";
import { query, where, orderBy } from "firebase/firestore";

/**
 * Create a new event
 */
export const createEvent = async (eventData: CreateEventData): Promise<string> => {
  return await createDocument(COLLECTIONS.EVENTS, eventData);
};

/**
 * Get event by ID
 */
export const getEventById = async (eventId: string): Promise<Event | null> => {
  return await getDocumentById<Event>(COLLECTIONS.EVENTS, eventId);
};

/**
 * Get all events, optionally filtered by status
 */
export const getAllEvents = async (
  status?: "upcoming" | "completed"
): Promise<Event[]> => {
  const constraints = [];

  if (status) {
    constraints.push(where("status", "==", status));
  }

  constraints.push(orderBy("date", "desc"));

  return await getAllDocuments<Event>(COLLECTIONS.EVENTS, constraints);
};

/**
 * Get upcoming events only
 */
export const getUpcomingEvents = async (): Promise<Event[]> => {
  return await getAllEvents("upcoming");
};

/**
 * Get completed events only
 */
export const getCompletedEvents = async (): Promise<Event[]> => {
  return await getAllEvents("completed");
};

/**
 * Update event
 */
export const updateEvent = async (
  eventId: string,
  updates: Partial<Omit<Event, "id" | "createdAt">>
): Promise<void> => {
  await updateDocument(COLLECTIONS.EVENTS, eventId, updates);
};

