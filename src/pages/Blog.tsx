import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

const categories = ["All", "Web Development", "Mobile", "AI & ML", "Design", "Business"];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping web development, from AI-powered tools to edge computing and beyond.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    category: "Web Development",
    author: "Alex Morgan",
    date: "Jan 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "Learn best practices for creating performant, scalable mobile applications that users love.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    category: "Mobile",
    author: "Sarah Chen",
    date: "Jan 10, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Integrating AI into Your Business: A Practical Guide",
    excerpt: "Discover how to leverage artificial intelligence to automate processes and drive business growth.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    category: "AI & ML",
    author: "Alex Morgan",
    date: "Jan 5, 2024",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "Design Systems: Why Your Team Needs One",
    excerpt: "How a well-structured design system can improve consistency, speed, and collaboration across your products.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "Design",
    author: "Michael Rodriguez",
    date: "Dec 28, 2023",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "From MVP to Scale: Growing Your Tech Startup",
    excerpt: "Essential strategies for taking your minimum viable product to a fully-fledged, scalable platform.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
    category: "Business",
    author: "Emily Johnson",
    date: "Dec 20, 2023",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Understanding TypeScript: A Complete Guide",
    excerpt: "Everything you need to know about TypeScript and why it's becoming the industry standard.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
    category: "Web Development",
    author: "Sarah Chen",
    date: "Dec 15, 2023",
    readTime: "12 min read",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const structuredData = generateBreadcrumbSchema([
    { name: "Home", url: "https://devzonesystem.com" },
    { name: "Blog", url: "https://devzonesystem.com/blog" },
  ]);

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Stay up to date with the latest in technology, design, and business growth. Read our articles on web development, mobile apps, AI, and digital transformation."
        keywords="tech blog, web development articles, mobile app development tips, AI insights, design systems, business growth, technology trends"
        url="https://devzonesystem.com/blog"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Our Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Insights & <span className="text-gradient">Ideas</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Stay up to date with the latest in technology, design, and business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar (Left on desktop) */}
            <aside className="lg:w-1/3">
              <div className="sticky top-28 space-y-10">
                {/* Search Bar */}
                <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Search Articles</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Type keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-11 bg-muted/30 border-none focus-visible:ring-primary/30"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <div className="flex flex-col gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all ${activeCategory === category
                          ? "bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20"
                          : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                      >
                        {category}
                        {activeCategory === category && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Topics / Tags */}
                <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm lg:block hidden">
                  <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["UI Design", "React", "Scalability", "AI", "Startup", "Cloud"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-muted/50 text-xs rounded-full cursor-pointer hover:bg-primary/20 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Post Grid */}
            <main className="lg:w-2/3">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20 bg-muted/10 rounded-3xl border border-dashed border-border">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                  <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                  <Button variant="ghost" className="mt-4" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                    Clear filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/40 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-none hover:bg-primary hover:text-white transition-colors">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3 w-3 text-primary" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3 w-3 text-primary" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-border/30">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold">
                                {post.author.charAt(0)}
                              </div>
                              <span className="text-xs font-medium">{post.author}</span>
                            </div>
                            <Link
                              to={`/blog/${post.id}`}
                              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all group-hover:translate-x-1"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border/50 p-12 md:p-16 rounded-[2rem] text-center shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Keep <span className="text-gradient">Learning?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                  Join 5,000+ developers receiving our weekly newsletter with the latest tech insights and industry news.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="h-14 rounded-full px-8 bg-muted/50 border-none focus-visible:ring-primary/30"
                  />
                  <Button className="h-14 rounded-full px-10 gradient-primary border-0 shadow-lg shadow-primary/20 w-full sm:w-auto font-bold">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-6 opacity-60">
                  No spam, ever. Unsubscribe with one click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

