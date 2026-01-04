import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Contact from "./Contact";
import { containerVariants, headingVariants, cardVariants } from "../lib/routeAnimations";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    publishedAt: any;
    author: string;
    type: "blog";
}

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsRef = collection(db, "posts");
                // Query for type: 'blog', ordered by publishedAt desc
                // Note: Requires Firestore index if ordering by different field than filter. 
                // Assuming 'publishedAt' is the order.
                const q = query(
                    postsRef,
                    where("type", "==", "blog"),
                    orderBy("publishedAt", "desc")
                );

                const querySnapshot = await getDocs(q);
                const fetchedPosts: BlogPost[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as BlogPost[];

                setPosts(fetchedPosts);
            } catch (err) {
                console.error("Error fetching blog posts:", err);
                setError("Failed to load updates. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Temporarily render the Contact page content at /blog while Blog remains intact in the codebase
    return <Contact />;
};

export default Blog;
