import { motion } from "framer-motion";
import { Check, ArrowRight, Code, Smartphone, Palette, Cloud, Brain, Headphones, Zap, Shield, Clock, Users } from "lucide-react";
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
    description: "Custom websites and web applications built with cutting-edge technologies.",
    features: ["React & Next.js", "Node.js & Python", "REST & GraphQL APIs", "Database Design"],
    pricing: "Starting at $5,000",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
    pricing: "Starting at $10,000",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to convert visitors into customers.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    pricing: "Starting at $3,000",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services for modern applications.",
    features: ["AWS & GCP", "CI/CD Pipelines", "Docker & Kubernetes", "Monitoring"],
    pricing: "Starting at $2,000/mo",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent automation and machine learning solutions for your business.",
    features: ["ChatGPT Integration", "Custom ML Models", "Data Analysis", "Automation"],
    pricing: "Starting at $8,000",
  },
  {
    icon: Headphones,
    title: "Tech Consulting",
    description: "Expert guidance on technology strategy and digital transformation.",
    features: ["Architecture Review", "Tech Stack Selection", "Code Audits", "Training"],
    pricing: "$200/hour",
  },
];

const processSteps = [
  {
    icon: Users,
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience through in-depth consultations.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our designers create stunning mockups and prototypes that align with your brand identity.",
  },
  {
    icon: Code,
    title: "Develop",
    description: "Our engineers build your solution using modern technologies and best practices.",
  },
  {
    icon: Zap,
    title: "Deploy",
    description: "We launch your project with comprehensive testing and ongoing support.",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while a full-featured application can take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes! We offer flexible maintenance packages that include bug fixes, security updates, performance monitoring, and feature enhancements. Our support team is available 24/7 for critical issues.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in React, Next.js, Node.js, Python, React Native, AWS, and various AI/ML technologies. We choose the best tech stack for each project based on requirements.",
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer both fixed-price and time-and-materials pricing models. For most projects, we provide a detailed quote after understanding your requirements. We're transparent about costs and provide regular updates.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We frequently collaborate with in-house teams, providing additional expertise or specialized skills. We integrate seamlessly with your existing workflows and tools.",
  },
];

const Services = () => {
  const serviceSchemaData = services.map((s) => ({
    name: s.title,
    description: s.description,
    price: s.pricing.replace("Starting at ", "").replace("/mo", ""),
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(serviceSchemaData),
      generateFAQSchema(faqs),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://haidertech.com" },
        { name: "Services", url: "https://haidertech.com/services" },
      ]),
    ],
  };

  return (
    <Layout>
      <SEO
        title="Services"
        description="Comprehensive tech services including web development, mobile apps, UI/UX design, cloud solutions, AI integration, and consulting. Get a free quote today."
        keywords="web development services, mobile app development, UI/UX design services, cloud solutions, AI integration, tech consulting, software development"
        url="https://haidertech.com/services"
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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Comprehensive <span className="text-gradient">Tech Solutions</span> for Your Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              From concept to launch, we provide end-to-end technology services to help your business thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <span className="text-lg font-semibold text-primary">{service.pricing}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Our Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              How We <span className="text-gradient">Work</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-medium text-sm uppercase tracking-wider"
              >
                FAQ
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mt-4"
              >
                Common <span className="text-gradient">Questions</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-lg border border-border/50 px-6"
                  >
                    <AccordionTrigger className="hover:no-underline text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            Get in touch for a free consultation and let's discuss how we can help bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
