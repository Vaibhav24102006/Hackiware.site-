/**
 * Example component showing how to use Firestore services
 * This is for reference only - remove when implementing actual features
 */

import { useEffect, useState } from "react";
import { getAllEvents, getPublishedPosts } from "./index";
import { Event, Post } from "./types";

export const ExampleFirestoreUsage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch events
        const eventsData = await getAllEvents();
        setEvents(eventsData);
        console.log("Events fetched:", eventsData);

        // Fetch posts
        const postsData = await getPublishedPosts();
        setPosts(postsData);
        console.log("Posts fetched:", postsData);

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Events ({events.length})</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      ))}

      <h2>Posts ({posts.length})</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.type}</p>
        </div>
      ))}
    </div>
  );
};

