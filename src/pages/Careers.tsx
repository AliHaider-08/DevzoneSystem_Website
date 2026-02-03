import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, Users, Rocket, Heart, Coffee } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    location: "Remote / Hybrid",
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

const Careers = () => {
  return (
    <Layout>
      <SEO
        title="Careers | HaiderTech"
        description="Join the HaiderTech team. We're hiring talented developers and designers to build innovative software solutions."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              We're Hiring
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gradient">Growing Team</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of a team that's building the future of technology. We offer 
              exciting projects, competitive compensation, and a culture that values 
              innovation and collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where talented people can do their best work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current openings and find the role that matches your skills and aspirations.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all hover:border-primary/50">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <Button asChild className="gradient-primary border-0 shrink-0">
                        <Link to="/contact">Apply Now</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and 
              tell us how you can contribute to our team.
            </p>
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link to="/contact">Send Your Resume</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
