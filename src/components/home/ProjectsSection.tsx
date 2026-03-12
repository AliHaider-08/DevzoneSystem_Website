import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import hireExpertImg from "@/assets/HireExpert.png";
import eHealthcareImg from "@/assets/EHealthcare.png";
import dashboardImg from "@/assets/Dashbaord.png";
import ai1Img from "@/assets/Ai1.jpeg";

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
    id: 4,
    title: "E-Healthcare",
    category: "Web Development",
    description: "A complete digital health platform including an online medicine ordering system, virtual consultations, and AI-powered symptom diagnosis.",
    image: eHealthcareImg,
    technologies: ["React.js", "Node.js", "Express.js", "Socket.io"],
  },
  {
    id: 5,
    title: "SaaS Multi-Purpose Dashboard",
    category: "Web Development",
    description: "A versatile SaaS dashboard designed for comprehensive business management, featuring real-time analytics, user administration, and multi-tenant support.",
    image: dashboardImg,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
  },
  {
    id: 7,
    title: "AI-Powered Smart Vending Machine",
    category: "AI Integration",
    description: "Developed an AI-powered vending machine using RAG to recommend protein supplements and vitamin products based on user context and preferences.",
    image: ai1Img,
    technologies: ["RAG", "Multimodal AI", "LangChain", "Face Recognition"],
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
