import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase";
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

    return (
        <section className="min-h-screen bg-[#050505] pt-32 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto max-w-6xl"
                >
                    <motion.div variants={headingVariants} className="mb-16 text-center">
                        <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            <span className="text-cyan-400">Cyber</span> Intelligence
                        </h1>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Latest updates, security analysis, and mitigation strategies from the Hackiware research team.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-400 py-10">{error}</div>
                    ) : posts.length === 0 ? (
                        <div className="text-center text-white/50 py-10">
                            No updates available at this time.
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <motion.article
                                    key={post.id}
                                    variants={cardVariants}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-cyan-400/30"
                                >
                                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-xs text-cyan-400 mb-4 font-mono uppercase tracking-wider">
                                            <span>{post.publishedAt?.toDate().toLocaleDateString() || "Recently"}</span>
                                            <span className="w-1 h-1 rounded-full bg-cyan-400/50" />
                                            <span>{post.author || "Hackiware Team"}</span>
                                        </div>

                                        <h2 className="font-orbitron text-xl text-white mb-4 group-hover:text-cyan-300 transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-white/40 uppercase tracking-widest group-hover:text-white/80 transition-colors">
                                                Read Analysis
                                            </span>
                                            <svg className="w-4 h-4 text-cyan-400 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
