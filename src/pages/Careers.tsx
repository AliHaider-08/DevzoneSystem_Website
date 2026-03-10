import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, Users, Rocket, Heart, Coffee, Star, Zap, Shield, Sparkles, Search } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$80k - $120k",
    description: "We're looking for an experienced React developer to join our team and build amazing web applications.",
    requirements: ["5+ years React experience", "TypeScript proficiency", "REST API integration", "State management (Redux/Zustand)"],
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$70k - $100k",
    description: "Join us to work on end-to-end solutions using modern technologies and best practices.",
    requirements: ["3+ years full stack experience", "React & Node.js", "Database design", "Cloud services (AWS/GCP)"],
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    salary: "$60k - $90k",
    description: "Create beautiful, intuitive designs that delight users and solve real problems.",
    requirements: ["3+ years design experience", "Figma expertise", "Design systems", "User research skills"],
    tags: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: 4,
    title: "Junior Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$40k - $60k",
    description: "Start your career with us! We provide mentorship and growth opportunities for passionate developers.",
    requirements: ["Basic JavaScript/TypeScript", "Willingness to learn", "Problem-solving mindset", "Team player"],
    tags: ["JavaScript", "React", "Learning"],
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Continuous learning, mentorship programs, and clear career progression paths.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family.",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours that fit your lifestyle.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Collaborative environment with talented people who support each other.",
  },
];

const cultureValues = [
  {
    icon: Star,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with code."
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description: "We ship fast but never compromise on the technical excellence."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Open communication and radical honesty are core to our identity."
  },
  {
    icon: Sparkles,
    title: "User Centric",
    description: "Every line of code we write is aimed at making the user's life better."
  }
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const structuredData = generateBreadcrumbSchema([
    { name: "Home", url: "https://devzonesystem.com" },
    { name: "Careers", url: "https://devzonesystem.com/careers" },
  ]);
  return (
    <Layout>
      <SEO
        title="Careers | Join Our Innovative Team at DevZone System"
        description="Join DevZone System. We're hiring talented developers and designers. Explore remote roles in React, Full Stack, UI/UX, and more."
        keywords="careers, job openings, software engineer jobs, remote tech jobs, web developer careers"
      />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge variant="outline" className="px-4 py-1.5 border-primary/20 bg-primary/5 text-primary text-sm font-medium rounded-full animate-pulse-slow">
                ✨ We're looking for stars
              </Badge>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Build the <span className="text-gradient">Future</span> of Technology With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              DevZone System is more than just a software house. We're a collective of thinkers, builders, and dreamers dedicated to engineering excellence.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <Button asChild size="lg" className="gradient-primary border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20">
                <a href="#positions">View Openings</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-border hover:bg-muted transition-colors">
                <a href="#culture">Our Culture</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Stats or Trust Line */}
      <section className="py-12 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24">
            {[
              { label: "Remote Forever", val: "100%" },
              { label: "Retention Rate", val: "95%" },
              { label: "Projects Shipped", val: "150+" },
              { label: "Global Presence", val: "10+" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                A Culture of <span className="text-gradient">Freedom</span> and Responsibility
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that great work happens when talented people are given the trust and tools they need to succeed. No micromanagement, just results and growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {cultureValues.map((value) => (
                  <div key={value.title} className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-card bg-muted flex items-center justify-center text-xs font-bold uppercase">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold">Growing Team</div>
                </div>
                <p className="text-xs text-muted-foreground">Join 10+ experts working from 5 different countries.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none hover:bg-primary/20">The Perks</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for <span className="text-gradient">Humans</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We've designed our benefits to support your professional growth and personal well-being.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={itemVariants}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 group overflow-hidden">
                  <CardContent className="pt-8 pb-8 px-6 text-center">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <benefit.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Open <span className="text-gradient">Positions</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Join our mission to build the most innovative digital products for businesses worldwide.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by role or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card border-border/50 rounded-xl focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border/50">
                <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-xl font-medium text-muted-foreground">No matching positions found.</p>
                <Button variant="ghost" className="mt-4" onClick={() => setSearchQuery("")}>
                  Show all positions
                </Button>
              </div>
            ) : (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="hover:shadow-3xl transition-all hover:border-primary/50 bg-card/40 backdrop-blur-md border-border/50 group overflow-hidden">
                    <CardHeader className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="space-y-4">
                          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm font-medium">
                            <span className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/10">
                              <Briefcase className="h-4 w-4 text-primary" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/10">
                              <MapPin className="h-4 w-4 text-primary" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                              <DollarSign className="h-4 w-4" />
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        <Button asChild className="gradient-primary border-0 rounded-full px-8 h-12 shadow-lg shadow-primary/10 group-hover:translate-x-1 transition-transform">
                          <Link to="/contact">Apply Now</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 pt-0">
                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{job.description}</p>
                      <div className="grid sm:grid-cols-2 gap-8 items-start mb-8 bg-muted/20 p-6 rounded-2xl border border-border/30">
                        <div>
                          <h4 className="font-bold mb-4 flex items-center gap-2 text-primary">
                            <Zap className="h-4 w-4" />
                            Requirements
                          </h4>
                          <ul className="space-y-3">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col">
                          <h4 className="font-bold mb-4 text-primary text-sm uppercase tracking-widest flex items-center gap-2">
                            <Rocket className="h-4 w-4" />
                            Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-muted hover:bg-primary/20 hover:text-primary transition-colors border-none py-1.5 px-4 rounded-lg font-bold">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="gradient-primary border-0 overflow-hidden relative p-12 md:p-20 text-center shadow-3xl">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Rocket className="h-64 w-64" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                  Ready to Shape the Future?
                </h2>
                <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Even if you don't see a role that fits today, we're always interested in meeting exceptional talent.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 border-0 rounded-full px-10 h-14 text-lg font-bold w-full sm:w-auto">
                    <Link to="/contact">Drop your Resume</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg w-full sm:w-auto">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </motion.div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;

