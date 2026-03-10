import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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
    description: "Full-featured e-commerce platform with real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB"],
    client: "Retail Client",
    results: "Real-time inventory & payments",
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Web Development",
    description: "Comprehensive healthcare system with patient records management and telemedicine features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Python", "AWS"],
    client: "MediCare Health",
    results: "Telemedicine integration",
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    category: "UI/UX Design",
    description: "Advanced data visualization and reporting dashboard for financial analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Angular", "D3.js", "Redis"],
    client: "FinTech Corp",
    results: "Advanced data visualization",
  },
  {
    id: 4,
    title: "Supply Chain Management",
    category: "Web Development",
    description: "Complete supply chain solution with inventory tracking and vendor coordination.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    technologies: ["React", "Java", "MySQL"],
    client: "Logistics Co.",
    results: "Streamlined operations",
  },
  {
    id: 5,
    title: "Educational Platform",
    category: "Mobile App",
    description: "Online learning platform with video streaming and progress tracking features.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    client: "EduLearn",
    results: "Video streaming & tracking",
  },
  {
    id: 6,
    title: "IoT Monitoring System",
    category: "AI Integration",
    description: "Real-time industrial equipment monitoring with alerts and predictive maintenance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    technologies: ["Python", "AWS IoT", "React"],
    client: "Industrial Tech",
    results: "Real-time monitoring & alerts",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const structuredData = generateBreadcrumbSchema([
    { name: "Home", url: "https://devzonesystem.com" },
    { name: "Portfolio", url: "https://devzonesystem.com/portfolio" },
  ]);

  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Explore our portfolio of successful projects including e-commerce platforms, mobile apps, SaaS dashboards, and AI solutions. See how we've helped businesses grow."
        keywords="web development portfolio, mobile app projects, UI/UX design examples, case studies, software development projects, tech portfolio"
        url="https://devzonesystem.com/portfolio"
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

      {/* Filter & Search */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card/30 p-4 rounded-2xl border border-border/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-2"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`h-10 rounded-full px-6 transition-all ${activeCategory === category
                      ? "gradient-primary border-0 shadow-lg shadow-primary/20"
                      : "hover:bg-primary/10 hover:text-primary border-border/50"
                    }`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative w-full md:w-80"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects or tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11 bg-muted/50 border-none rounded-xl focus-visible:ring-primary/30"
              />
            </motion.div>
          </div>
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
