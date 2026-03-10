import { motion } from "framer-motion";
import { ArrowRight, Target, Heart, Lightbulb, Users, Award, Rocket, Linkedin, Github, Search, PenTool, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/structured-data";
import teamHammad from "@/assets/Hammad.jpeg";
import teamAli from "@/assets/AliPic.jpeg";
import teamIhtisham from "@/assets/Ihtisham.jpeg";
import teamOsama from "@/assets/Osama.jpeg";
import teamUmair from "@/assets/umair.jpeg";
import teamMoeen from "@/assets/Moeen.jpeg";

const team = [
  {
    name: "Ali Haider",
    role: "Founder & Full Stack Developer",
    image: teamAli,
    bio: "Visionary leader and expert in modern web technologies. Building robust and scalable applications.",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Abdul Muin Qureshi",
    role: "Lead Software Developer",
    image: teamMoeen,
    bio: "Expert in leading development teams and architecting scalable software solutions. Passionate about clean code and best practices.",
    social: { linkedin: "https://www.linkedin.com/company/devzone-system/", github: "#" },
  },
  {
    name: "Hammad Khan",
    role: "Blockchain Developer",
    image: teamHammad,
    bio: "Expert in blockchain technologies, smart contracts, and decentralized applications. Building the future of Web3.",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Ihtisham",
    role: "WordPress Developer",
    image: teamIhtisham,
    bio: "Expert in crafting high-performance, SEO-optimized WordPress websites and custom themes with a focus on speed and user experience.",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Osama",
    role: "AI Engineer",
    image: teamOsama,
    bio: "Specialist in building intelligent systems, machine learning models, and cutting-edge AI integrations to solve complex problems.",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Muhammad Umair",
    role: "Data Scientist & AI Engineer",
    image: teamUmair,
    bio: "Specializing in data-driven solutions, predictive modeling, and advanced AI architectures to turn complex data into actionable insights.",
    social: { linkedin: "#", github: "#" },
  },
];

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust through honest communication and transparent practices in everything we do.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We don't settle for good enough. Every project receives our best effort and attention to detail.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Shaping the future of technology by creating unprecedented opportunities for innovation.",
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your success is our success. We're dedicated to helping businesses thrive through technology.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We start by diving deep into your business goals, user needs, and project requirements to build a solid foundation.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our design team creates intuitive user interfaces and seamless experiences tailored to your brand identity.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Our developers bring designs to life using cutting-edge technologies and best practices for scalable solutions.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "After rigorous testing, we deploy your project and provide ongoing support to ensure long-term success.",
  },
];



const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://devzonesystem.com" },
        { name: "About", url: "https://devzonesystem.com/about" },
      ]),
    ],
  };

  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about DevZone System's journey, our team of experts, company values, and the technologies we master. 5+ years of experience with 150+ projects delivered."
        keywords="about DevZone System, tech company, software development team, company values, tech stack, web development agency"
        url="https://devzonesystem.com/about"
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6"
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
                  <strong>Our Mission:</strong> Empowering businesses through innovative software solutions that drive growth and efficiency. We believe technology should be accessible to businesses of all sizes.
                </p>
                <p>
                  <strong>Our Vision:</strong> Shaping the future of technology by creating unprecedented opportunities for innovation. We've helped over 30 happy clients transform their digital presence with 100% satisfaction.
                </p>
                <p>
                  With 5+ years of experience and 50+ projects delivered, we're proud to be a trusted technology partner for startups and enterprises alike.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Award className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-4xl font-bold mb-1">5+</h3>
                    <p className="text-muted-foreground text-sm font-medium">Years in Business</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-4xl font-bold mb-1">30+</h3>
                    <p className="text-muted-foreground text-sm font-medium">Happy Clients</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Rocket className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-4xl font-bold mb-1">50+</h3>
                    <p className="text-muted-foreground text-sm font-medium">Projects Delivered</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Target className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-4xl font-bold mb-1">100%</h3>
                    <p className="text-muted-foreground text-sm font-medium">Client Satisfaction</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-widest"
            >
              Our Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4"
            >
              How We <span className="text-gradient">Bring Ideas to Life</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connecting Line (Only for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-transparent z-0" />
                )}

                <Card className="h-full bg-card border-border/50 hover:border-primary/40 transition-all duration-500 relative z-10 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <div className="text-primary/40 text-4xl font-bold mb-4">0{index + 1}</div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-widest"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4"
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
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                      <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-center pt-8 overflow-hidden">
                    <div className="w-44 h-44 rounded-2xl overflow-hidden border-2 border-primary/10 group-hover:border-primary/40 transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold tracking-tight">{member.name}</h3>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3 leading-none mt-1">{member.role}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="w-8 h-8 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 group/icon">
                          <Linkedin className="h-3.5 w-3.5 group-hover/icon:scale-110 transition-transform" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="w-8 h-8 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 group/icon">
                          <Github className="h-3.5 w-3.5 group-hover/icon:scale-110 transition-transform" />
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
