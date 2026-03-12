import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import hireExpertImg from "@/assets/HireExpert.png";
import ai1Img from "@/assets/Ai1.jpeg";
import jhOilImg from "@/assets/JH.jpeg";
import clenchSportsImg from "@/assets/clenchsports.png";

const projects = [
  {
    id: 0,
    title: "Hire Expert",
    category: "Web Development",
    description: "A comprehensive freelancing platform developed for the Pakistan Software Export Board to empower the national digital economy.",
    image: hireExpertImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 7,
    title: "AI-Powered Smart Vending",
    category: "AI Integration",
    description: "Advanced AI vending system using RAG to recommend protein supplements based on user context and multimodal inputs.",
    image: ai1Img,
    technologies: ["RAG", "LangChain", "Face Recognition"],
  },
  {
    id: 9,
    title: "JH Oil change",
    category: "Mobile App",
    description: "Specialized mobile application for streamlined automotive services, featuring real-time appointment tracking and maintenance reminders.",
    image: jhOilImg,
    technologies: ["React Native", "Firebase", "Node.js"],
  },
  {
    id: 10,
    title: "ClenchX Sports",
    category: "WordPress",
    description: "Premium WordPress e-commerce store for sports apparel, featuring WooCommerce integration and optimized product showcases.",
    image: clenchSportsImg,
    technologies: ["WordPress", "WooCommerce", "Elementor"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Featured Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              Our Latest <span className="text-gradient">Success Stories</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild variant="outline">
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card border-border/50 hover:border-accent/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full hover:bg-accent hover:text-accent-foreground" asChild>
                      <Link to={`/portfolio/${project.id}`}>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
