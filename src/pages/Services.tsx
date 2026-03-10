import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowRight, Code, Smartphone, Palette, Cloud, Brain, Headphones, Zap, Shield, Rocket, Cpu, Users, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance web applications built with React, Next.js, and modern backends.",
    features: ["Custom Web Apps", "E-commerce Solutions", "API Development"],
    color: "from-primary to-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Seamless native and cross-platform mobile experiences for iOS and Android.",
    features: ["iOS & Android", "React Native", "App Store Deployment"],
    color: "from-accent to-teal-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive and beautiful interfaces designed for maximum user engagement.",
    features: ["User Research", "Visual Design", "Prototyping"],
    color: "from-primary to-accent",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps to power your digital growth.",
    features: ["AWS/GCP Setup", "CI/CD Pipelines", "Containerization"],
    color: "from-blue-400 to-primary",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Smart automation and machine learning models tailored to your business.",
    features: ["Custom AI Agents", "Data Science", "Automations"],
    color: "from-teal-400 to-accent",
  },
  {
    icon: Headphones,
    title: "Tech Consulting",
    description: "Strategic guidance to help you navigate complex technology decisions.",
    features: ["Architecture Review", "Tech Strategy", "Security Audits"],
    color: "from-accent to-primary",
  },
];

const processSteps = [
  { icon: Users, title: "Discovery", description: "In-depth consultations to align with your mission.", color: "hsl(210 100% 60%)" },
  { icon: Palette, title: "Design", description: "Crafting visual identities and user-centric layouts.", color: "hsl(163 50% 55%)" },
  { icon: Code, title: "Develop", description: "Agile engineering with focus on speed and security.", color: "hsl(210 100% 60%)" },
  { icon: Rocket, title: "Launch", description: "Quality assurance and global deployment support.", color: "hsl(163 50% 55%)" },
];

const faqs = [
  { question: "How long does a project take?", answer: "Simple sites take 2-4 weeks. Complex apps take 2-6 months depending on the scope and features." },
  { question: "Do you offer support?", answer: "Yes, we provide 24/7 maintenance, security monitoring, and regular performance updates for all our projects." },
  { question: "What pricing models do you offer?", answer: "We offer flexible pricing including fixed-bid for well-defined projects and hourly/retainer models for ongoing agile development." },
  { question: "How do you ensure project security?", answer: "Security is non-negotiable. We implement end-to-end encryption, secure API protocols, and perform regular vulnerability assessments." },
  { question: "Can you help with existing projects?", answer: "Absolutely. We specialize in taking over, optimizing, and scaling existing codebases while maintaining technical stability." },
  { question: "What is your development process?", answer: "We use an Agile methodology with weekly sprints, transparent reporting, and continuous feedback loops to ensure your vision is met." },
  { question: "How do we get started?", answer: "Simply book a discovery call via our contact form. We'll analyze your requirements and provide a detailed roadmap within 48 hours." },
];

const BackgroundShapes = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px]"
      />
    </div>
  );
};

const RunningText = () => {
  return (
    <div className="absolute top-1/2 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none -translate-y-1/2 whitespace-nowrap">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="text-[6rem] md:text-[15rem] font-black uppercase flex gap-10 md:gap-20"
      >
        <span>Services</span>
        <span>Innovation</span>
        <span>Solutions</span>
        <span>Future</span>
        <span>Services</span>
        <span>Innovation</span>
        <span>Solutions</span>
        <span>Future</span>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(services.map(s => ({ name: s.title, description: s.description }))),
      generateFAQSchema(faqs),
      generateBreadcrumbSchema([{ name: "Home", url: "https://devzonesystem.com" }, { name: "Services", url: "https://devzonesystem.com/services" }]),
    ],
  };

  return (
    <Layout>
      <SEO title="Services | DevZone System" description="Premium digital solutions." url="https://devzonesystem.com/services" structuredData={structuredData} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BackgroundShapes />
        <RunningText />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-semibold mb-6"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Next-Gen Innovation</span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter"
            >
              Our <span className="text-gradient">Core Services</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-medium"
          >
            Scalable digital solutions designed to accelerate your growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }}>
                <Card className="h-full glass-dark border-border/40 hover:border-primary/50 transition-all duration-300 group shadow-lg">
                  <CardHeader className="p-8 pb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-0">
                    <ul className="space-y-3 mb-8">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground/80"><Check className="h-3.5 w-3.5 text-primary" /> {feature}</li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-border/50 flex items-center justify-end">
                      <Button variant="ghost" size="sm" asChild className="group/btn">
                        <Link to="/contact">Inquiry <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" /></Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
            >
              The Methodology
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-6"
            >
              How We Execute <br />
              <span className="text-gradient">With Precision</span>
            </motion.h2>
          </div>

          <div className="relative">
            {/* Desktop Progress Line */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative z-10 text-center flex flex-col items-center group"
                >
                  <div className="relative mb-10">
                    {/* Step Icon Container */}
                    <div
                      className="w-28 h-28 rounded-[2.5rem] flex items-center justify-center relative transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-xl"
                      style={{
                        backgroundColor: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                        boxShadow: `0 20px 40px -10px ${step.color}20`
                      }}
                    >
                      <step.icon className="h-10 w-10 transition-transform duration-500 group-hover:scale-110" style={{ color: step.color }} />

                      {/* Step Number Badge */}
                      <div
                        className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black text-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500"
                        style={{ backgroundColor: step.color }}
                      >
                        0{index + 1}
                      </div>

                      {/* Animated Glow Overlay */}
                      <div
                        className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10"
                        style={{ backgroundColor: `${step.color}30` }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm max-w-[220px] mx-auto font-medium">
                    {step.description}
                  </p>

                  {/* Decorative dot for desktop line */}
                  <div className="hidden lg:block absolute top-[-5px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-border/50 border-4 border-background" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Expert Support</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass px-6 rounded-2xl border-border/40">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto glass p-12 md:p-16 rounded-[40px] text-center relative overflow-hidden group">
            <div className="absolute inset-0 gradient-primary opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Create Reality</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Ready to build something extraordinary? Connect with our team today and transform your project into a digital masterpiece.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="h-14 px-10 rounded-full shadow-2xl gradient-primary border-0 text-md">
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-40 grayscale">
              <div className="flex items-center gap-2 text-sm font-bold"><Zap className="w-4 h-4" /> Fast Execution</div>
              <div className="flex items-center gap-2 text-sm font-bold"><Shield className="w-4 h-4" /> Secure Code</div>
              <div className="flex items-center gap-2 text-sm font-bold"><Lock className="w-4 h-4" /> Privacy First</div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
