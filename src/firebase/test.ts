/**
 * Temporary test file to verify Firestore integration
 * This can be removed once proper data fetching is implemented in components
 */

import {
  getAllEvents,
  getUpcomingEvents,
  getCompletedEvents,
} from "./services/events";
import {
  getPublishedPosts,
  getBlogPosts,
  getAchievementPosts,
} from "./services/posts";
import { getAllUsers } from "./services/users";

/**
 * Test function to verify Firestore connectivity
 * Call this from a component or console to test
 */
export const testFirestoreConnection = async () => {
  console.log("🔥 Testing Firestore connection...\n");

  try {
    // Test Events
    console.log("📅 Fetching events...");
    const allEvents = await getAllEvents();
    console.log(`Found ${allEvents.length} events:`, allEvents);

    const upcomingEvents = await getUpcomingEvents();
    console.log(`Found ${upcomingEvents.length} upcoming events:`, upcomingEvents);

    const completedEvents = await getCompletedEvents();
    console.log(`Found ${completedEvents.length} completed events:`, completedEvents);

    // Test Posts
    console.log("\n📝 Fetching posts...");
    const allPosts = await getPublishedPosts();
    console.log(`Found ${allPosts.length} posts:`, allPosts);

    const blogPosts = await getBlogPosts();
    console.log(`Found ${blogPosts.length} blog posts:`, blogPosts);

    const achievementPosts = await getAchievementPosts();
    console.log(`Found ${achievementPosts.length} achievement posts:`, achievementPosts);

    // Test Users
    console.log("\n👥 Fetching users...");
    const allUsers = await getAllUsers();
    console.log(`Found ${allUsers.length} users:`, allUsers);

    console.log("\n✅ Firestore connection test completed successfully!");
  } catch (error) {
    console.error("❌ Firestore connection test failed:", error);
    throw error;
  }
};

