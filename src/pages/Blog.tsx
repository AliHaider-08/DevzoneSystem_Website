import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

      {/* Search and Filter */}
      <section className="pb-10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "gradient-primary border-0" : ""}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-10 pb-24">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card border-border/50 hover:border-primary/30 overflow-hidden group transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">By {post.author}</span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Never Miss an Update
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              Subscribe to our newsletter for the latest insights, tips, and industry news.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="gradient-primary border-0">Subscribe</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
