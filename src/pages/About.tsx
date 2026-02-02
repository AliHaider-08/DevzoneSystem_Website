import { motion } from "framer-motion";
import { ArrowRight, Target, Heart, Lightbulb, Users, Award, Rocket, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/structured-data";

const team = [
  {
    name: "Alex Haider",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    bio: "10+ years in tech leadership. Previously led engineering at Fortune 500 companies.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: "Full-stack architect with expertise in scalable systems and AI integration.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "Award-winning designer passionate about creating beautiful, user-centric experiences.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    bio: "PMP certified with experience delivering complex projects on time and budget.",
    social: { linkedin: "#", twitter: "#" },
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We don't settle for good enough. Every project receives our best effort and attention to detail.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We build lasting partnerships based on trust and results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve, constantly learning and applying the latest technologies.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe great things happen when talented people work together toward a common goal.",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "OpenAI", category: "AI" },
  { name: "Figma", category: "Design" },
];

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://haidertech.com" },
        { name: "About", url: "https://haidertech.com/about" },
      ]),
    ],
  };

  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about HaiderTech's journey, our team of experts, company values, and the technologies we master. 5+ years of experience with 150+ projects delivered."
        keywords="about HaiderTech, tech company, software development team, company values, tech stack, web development agency"
        url="https://haidertech.com/about"
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Building the Future, <span className="text-gradient">One Line at a Time</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              We're a team of passionate technologists dedicated to helping businesses thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                From Garage Startup to <span className="text-gradient">Industry Leader</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  HaiderTech was founded in 2019 with a simple mission: make cutting-edge technology accessible to businesses of all sizes. What started as a small team in a garage has grown into a full-service tech company serving clients worldwide.
                </p>
                <p>
                  Our journey has been defined by our commitment to excellence and our passion for solving complex problems. We've helped over 50 businesses transform their digital presence, from startups launching their first product to enterprises modernizing their tech stack.
                </p>
                <p>
                  Today, we're proud to be recognized as a leading technology partner, known for delivering solutions that drive real business results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 border border-border/50">
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-3xl font-bold">5+</h3>
                  <p className="text-muted-foreground text-sm">Years in Business</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/50">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-3xl font-bold">50+</h3>
                  <p className="text-muted-foreground text-sm">Happy Clients</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-card rounded-xl p-6 border border-border/50">
                  <Rocket className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-3xl font-bold">150+</h3>
                  <p className="text-muted-foreground text-sm">Projects Delivered</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/50">
                  <Target className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-3xl font-bold">99%</h3>
                  <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              What <span className="text-gradient">Drives Us</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              Meet the <span className="text-gradient">Experts</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border/50 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Tech Stack
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              Tools We <span className="text-gradient">Master</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 bg-card border border-border/50 rounded-lg text-sm font-medium hover:border-primary/50 hover:shadow-glow transition-all cursor-pointer"
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Want to Join Our Team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            We're always looking for talented individuals who share our passion for technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
