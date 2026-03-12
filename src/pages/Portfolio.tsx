import { useState } from "react";
import hireExpertImg from "@/assets/HireExpert.png";
import desiDelightImg from "@/assets/DesiDelight.jpg";
import noirEssenceImg from "@/assets/Noir Essence.jpg";
import hospitalImg from "@/assets/Hospital.jpg";
import eHealthcareImg from "@/assets/EHealthcare.png";
import dashboardImg from "@/assets/Dashbaord.png";
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
    id: 0,
    title: "Hire Expert",
    category: "Web Development",
    description: "A comprehensive freelancing platform developed for the Pakistan Software Export Board to empower the national digital economy.",
    image: hireExpertImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    client: "Pakistan Software Export Board (PSEB)",
    results: "National-scale freelance ecosystem",
  },
  {
    id: 1,
    title: "Desi Delight",
    category: "Web Development",
    description: "A premium restaurant website featuring an interactive menu, online reservations, and a vibrant showcase of traditional cuisine.",
    image: desiDelightImg,
    technologies: ["React", "Custom CSS", "Framer Motion"],
    client: "Restaurant Client",
    results: "Modern digital dining experience",
  },
  {
    id: 2,
    title: "Noir Essence",
    category: "Web Development",
    description: "A luxury e-commerce experience for a premium perfume brand, featuring a sophisticated scent explorer and elegant product showcases.",
    image: noirEssenceImg,
    technologies: ["React.js", "Node.js", "Express.js"],
    client: "Noir Essence Luxury",
    results: "Premium brand transformation",
  },
  {
    id: 3,
    title: "Hospital Management System",
    category: "Web Development",
    description: "A comprehensive digital healthcare solution for managing patient records, appointments, and medical staff workflows efficiently.",
    image: hospitalImg,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    client: "Medical Center",
    results: "Streamlined healthcare operations",
  },
  {
    id: 4,
    title: "E-Healthcare",
    category: "Web Development",
    description: "A complete digital health platform including an online medicine ordering system, virtual consultations, and AI-powered symptom diagnosis.",
    image: eHealthcareImg,
    technologies: ["React.js", "Node.js", "Express.js", "Socket.io"],
    client: "Healthcare Connect",
    results: "Integrated pharmaceutical ecosystem",
  },
  {
    id: 5,
    title: "SaaS Multi-Purpose Dashboard",
    category: "Web Development",
    description: "A versatile SaaS dashboard designed for comprehensive business management, featuring real-time analytics, user administration, and multi-tenant support.",
    image: dashboardImg,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    client: "SaaS Enterprise",
    results: "Centralized business management",
  },
  {
    id: 6,
    title: "Financial Analytics Dashboard",
    category: "UI/UX Design",
    description: "Advanced data visualization and reporting dashboard for financial analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Angular", "D3.js", "Redis"],
    client: "FinTech Corp",
    results: "Advanced data visualization",
  },
  {
    id: 7,
    title: "AI-Powered Smart Vending Machine",
    category: "AI Integration",
    description: "Developed an AI-powered vending machine using RAG to recommend protein supplements and vitamin products based on user context and preferences. Integrated multimodal inputs (face recognition, text, voice) and a structured nutrition database.",
    image: "https://images.unsplash.com/photo-1585007600263-ad26c4800763?w=800&h=600&fit=crop",
    technologies: ["RAG", "Multimodal AI", "LangChain", "Face Recognition"],
    client: "Nutrition-Tech Client",
    results: "Personalized health recommendations",
  },
  {
    id: 8,
    title: "Podcast-AI-Agent-Development",
    category: "AI Integration",
    description: "Designed and deployed an LLM-based RAG system to process podcast transcripts, enabling content analysis, automated question generation, and advisory-style interactions aligned with the podcast’s brand voice.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop",
    technologies: ["LangChain", "FAISS", "LLM fine-tuning", "Python"],
    client: "Media Hub",
    results: "Scalable content engagement",
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
                      <Button size="icon" variant="secondary" className="rounded-full" asChild>
                        <Link to={`/portfolio/${project.id}`}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
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
