import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

const categories = ["All", "Web Development", "Mobile App", "UI/UX Design", "AI Integration"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online store with advanced inventory management, payment processing, and real-time analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    client: "FashionHub Inc.",
    results: "150% increase in online sales",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile App",
    description: "iOS and Android app for tracking workouts, nutrition, and health metrics with AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    client: "FitLife Co.",
    results: "500K+ downloads in first year",
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    category: "UI/UX Design",
    description: "Modern analytics dashboard for a B2B software platform with real-time data visualization and custom reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Figma", "React", "D3.js", "TypeScript"],
    client: "DataMetrics Inc.",
    results: "40% improvement in user engagement",
  },
  {
    id: 4,
    title: "AI Chatbot Platform",
    category: "AI Integration",
    description: "Intelligent customer service chatbot with natural language processing and seamless CRM integration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    technologies: ["Python", "OpenAI", "AWS Lambda", "React"],
    client: "SupportPro Ltd.",
    results: "60% reduction in support tickets",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing and management platform with virtual tours, mortgage calculator, and agent dashboard.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    client: "HomeFind Realty",
    results: "3x increase in property inquiries",
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "Mobile App",
    description: "On-demand food delivery application with real-time tracking, multi-restaurant support, and loyalty program.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
    client: "QuickBite",
    results: "200K active users",
  },
  {
    id: 7,
    title: "Healthcare Portal",
    category: "UI/UX Design",
    description: "Patient portal with appointment booking, telemedicine integration, and secure health records management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    technologies: ["Figma", "React", "Node.js", "HIPAA Compliant"],
    client: "MediCare Health",
    results: "85% patient satisfaction rate",
  },
  {
    id: 8,
    title: "Document Intelligence",
    category: "AI Integration",
    description: "AI-powered document processing system with OCR, data extraction, and automated workflow integration.",
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "AWS", "React"],
    client: "LegalDocs Pro",
    results: "90% faster document processing",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const structuredData = generateBreadcrumbSchema([
    { name: "Home", url: "https://haidertech.com" },
    { name: "Portfolio", url: "https://haidertech.com/portfolio" },
  ]);

  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Explore our portfolio of successful projects including e-commerce platforms, mobile apps, SaaS dashboards, and AI solutions. See how we've helped businesses grow."
        keywords="web development portfolio, mobile app projects, UI/UX design examples, case studies, software development projects, tech portfolio"
        url="https://haidertech.com/portfolio"
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
              Our Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Projects We're <span className="text-gradient">Proud Of</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Explore our latest work and see how we've helped businesses achieve their digital goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
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

      {/* Projects Grid */}
      <section className="py-10 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Card className="group overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary text-sm font-medium">{project.category}</span>
                      <span className="text-muted-foreground text-xs">{project.client}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border">
                      <span className="text-sm font-medium text-primary">{project.results}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Want to Be Our Next Success Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            Let's discuss your project and create something amazing together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
