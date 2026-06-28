import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Shield, DollarSign, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/structured-data";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "devzonesystem@gmail.com",
    link: "mailto:devzonesystem@gmail.com",
    desc: "Get response within 12 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "03250075364",
    link: "tel:03250075364",
    desc: "Monday - Friday, 9am - 6pm",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Support",
    content: "+92 325 0075364",
    link: "https://wa.me/923250075364",
    desc: "Available daily for instant chat",
  },
];

const serviceCategories = [
  {
    category: "Web Development",
    subcategories: [
      "WordPress Development",
      "MERN Stack Development",
      "Next.js / React.js",
      "PHP / Laravel",
      "Shopify Development",
      "E-commerce Solution",
      "Portfolio Website",
      "CMS Development",
      "API Integration"
    ]
  },
  {
    category: "Flutter Development",
    subcategories: [
      "Android & iOS App",
      "Flutter Web & Desktop",
      "Firebase Integration",
      "Payment Gateway Integration",
      "Real-time Chat Apps",
      "Google Maps Integration",
      "App Maintenance & UI Fixes"
    ]
  },
  {
    category: "Artificial Intelligence",
    subcategories: [
      "AI Model Training",
      "ChatGPT / LLM Integration",
      "Custom AI Chatbots",
      "Computer Vision",
      "NLP (Natural Language Processing)",
      "Data Science & Analytics",
      "Web Scraping & Automation"
    ]
  },
  {
    category: "Cyber Security",
    subcategories: [
      "Penetration Testing (VAPT)",
      "Web Application Security",
      "Network Security Audit",
      "Cloud Security",
      "Malware Removal",
      "Security Consulting"
    ]
  },
  {
    category: "Networking",
    subcategories: [
      "Server Management",
      "Cloud Infrastructure (AWS/GCP)",
      "VPN & Firewall Configuration",
      "Load Balancing Setup",
      "Network Troubleshooting"
    ]
  },
  {
    category: "UI/UX Design",
    subcategories: [
      "Mobile App UI/UX",
      "Website UI/UX Design",
      "Wireframing & Prototyping",
      "Logo & Brand Identity",
      "Social Media Graphics",
      "Illustrations & Icons"
    ]
  }
];

const budgetRanges = ["< $1k", "$1k - $3k", "$3k - $10k", "$10k+"];
const timelineRanges = ["< 1 Month", "1-3 Months", "3-6 Months", "Flexible"];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subcategory: "",
    message: "",
  });

  const [selectedBudget, setSelectedBudget] = useState(budgetRanges[1]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineRanges[1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/devzonesystem@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          subcategory: formData.subcategory,
          budget: selectedBudget,
          timeline: selectedTimeline,
          message: formData.message,
          _subject: `💰 DevZone System Inquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "We've received your inquiry and will get back to you within 24 hours.",
        });

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", category: "", subcategory: "", message: "" });
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly at devzonesystem@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema(),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://devzonesystem.com" },
        { name: "Contact", url: "https://devzonesystem.com/contact" },
      ]),
    ],
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with DevZone System for a free consultation. We're here to help with web development, mobile apps, UI/UX design, and AI solutions."
        keywords="contact DevZone System, get a quote, tech consultation, web development inquiry, software development contact"
        url="https://devzonesystem.com/contact"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mt-2 mb-6 tracking-tight line-clamp-2"
            >
              Let's Create <span className="text-gradient">Something Grand</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project or design in mind? Fill out this consultation form and our technology leads will connect with you within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-12 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Left Column: Coordinates & Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="border-b border-border/50 pb-4 mb-2">
                  <h2 className="text-2xl font-extrabold tracking-tight">Support Channels</h2>
                  <p className="text-sm text-muted-foreground mt-1">Direct interfaces to our development team.</p>
                </div>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Card className="bg-card/40 border-border/40 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="space-y-0.5">
                          <h3 className="font-bold text-sm text-foreground">{info.title}</h3>
                          <a
                            href={info.link}
                            className="text-primary text-sm font-semibold hover:underline block break-all"
                          >
                            {info.content}
                          </a>
                          <span className="text-xs text-muted-foreground block">{info.desc}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Animated Command Center Map Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="bg-card border-border/50 overflow-hidden relative group">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-sm tracking-tight mb-3 flex items-center gap-2 text-foreground">
                        <MapPin className="h-4.5 w-4.5 text-primary" />
                        Tech Command Center
                      </h3>
                      <div className="h-48 rounded-2xl bg-neutral-950 border border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                        {/* Grid design background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:15px_15px]" />

                        {/* Simulated connection points */}
                        <svg className="w-full h-full opacity-35" viewBox="0 0 100 50">
                          <circle cx="20" cy="15" r="1" className="fill-slate-600" />
                          <circle cx="35" cy="22" r="1" className="fill-slate-600" />
                          <circle cx="50" cy="18" r="1.5" className="fill-slate-600" />
                          <circle cx="78" cy="24" r="1" className="fill-slate-600" />
                          <circle cx="85" cy="12" r="1.2" className="fill-slate-600" />
                          <circle cx="67" cy="21" r="1.5" className="fill-primary animate-pulse" />
                          <path d="M20 15 Q 43.5 10, 67 21" className="stroke-primary/20 stroke-[0.35] fill-none stroke-dasharray-[2_2]" />
                          <path d="M35 22 Q 51 15, 67 21" className="stroke-primary/20 stroke-[0.35] fill-none stroke-dasharray-[2_2]" />
                          <path d="M50 18 Q 58.5 15, 67 21" className="stroke-primary/20 stroke-[0.35] fill-none stroke-dasharray-[2_2]" />
                          <path d="M85 12 Q 76 16, 67 21" className="stroke-primary/20 stroke-[0.35] fill-none stroke-dasharray-[2_2]" />
                        </svg>

                        {/* Pulsing Active Area */}
                        <div className="absolute top-[42%] left-[67%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                          <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/20 animate-ping" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-white/5 p-3 rounded-xl flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-accent animate-pulse" />
                            <span className="text-slate-300 font-bold font-mono">Active (UTC+5)</span>
                          </div>
                          <span className="text-slate-400 font-mono font-medium">Islamabad, PK</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

              </motion.div>
            </div>

            {/* Right Column: Interaction Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-card/30 backdrop-blur-sm border-border/50 overflow-hidden shadow-2xl relative">
                {/* Visual Line Decorator at the top */}
                <div className="w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                <CardContent className="p-8">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-20"
                      >
                        <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
                        <h3 className="text-3xl font-bold mb-2">Message Dispatched!</h3>
                        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                          Your records have been sent successfully. One of our lead advisors will compile details and contact you shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="border-b border-border/50 pb-4 mb-4">
                          <h2 className="text-xl font-bold text-foreground">Project Inquiry Form</h2>
                          <p className="text-xs text-muted-foreground mt-0.5">Please fill out mandatory parameters marked with *</p>
                        </div>

                        {/* Name & Email Group */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-slate-300 text-sm font-semibold">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="e.g. Johnathan Doe"
                              className="bg-slate-900/50 border-border/60 rounded-xl focus-visible:ring-primary/30"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-300 text-sm font-semibold">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="e.g. john@example.com"
                              className="bg-slate-900/50 border-border/60 rounded-xl focus-visible:ring-primary/30"
                              required
                            />
                          </div>
                        </div>

                        {/* Phone & Selection Group */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-slate-300 text-sm font-semibold">Phone / WhatsApp</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="e.g. +92 300 1234567"
                              className="bg-slate-900/50 border-border/60 rounded-xl focus-visible:ring-primary/30"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="category" className="text-slate-300 text-sm font-semibold">Primary Category *</Label>
                            <Select
                              value={formData.category}
                              onValueChange={(value) => setFormData({ ...formData, category: value, subcategory: "" })}
                              required
                            >
                              <SelectTrigger className="bg-slate-900/50 border-border/60 rounded-xl focus:ring-primary/30">
                                <SelectValue placeholder="Select Category" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-900 border-white/10 text-white rounded-xl">
                                {serviceCategories.map((cat) => (
                                  <SelectItem key={cat.category} value={cat.category} className="focus:bg-primary/20 focus:text-white rounded-lg">
                                    {cat.category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Specific Service Subcategory */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="subcategory" className="text-slate-300 text-sm font-semibold">Specific Service *</Label>
                            <Select
                              value={formData.subcategory}
                              onValueChange={(value) => setFormData({ ...formData, subcategory: value })}
                              required
                              disabled={!formData.category}
                            >
                              <SelectTrigger className="bg-slate-900/50 border-border/60 rounded-xl focus:ring-primary/30">
                                <SelectValue placeholder={formData.category ? "Select Specific Area" : "Select Category first"} />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-900 border-white/10 text-white rounded-xl">
                                {formData.category &&
                                  serviceCategories.find(c => c.category === formData.category)?.subcategories.map((sub) => (
                                    <SelectItem key={sub} value={sub} className="focus:bg-primary/20 focus:text-white rounded-lg">
                                      {sub}
                                    </SelectItem>
                                  ))
                                }
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Interactive Budget Options */}
                        <div className="space-y-3 pt-2">
                          <Label className="text-slate-300 text-sm font-semibold flex items-center gap-1.5">
                            <DollarSign className="w-4 h-4 text-primary" />
                            Estimated Project Budget
                          </Label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {budgetRanges.map((val) => (
                              <button
                                key={val}
                                type="button"
                                onClick={() => setSelectedBudget(val)}
                                className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-300 ${selectedBudget === val
                                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-slate-900/50 border-border/50 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
                                  }`}
                              >
                                {val}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Timeline Options */}
                        <div className="space-y-3 pt-2">
                          <Label className="text-slate-300 text-sm font-semibold flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-accent" />
                            Project Timeline Target
                          </Label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {timelineRanges.map((val) => (
                              <button
                                key={val}
                                type="button"
                                onClick={() => setSelectedTimeline(val)}
                                className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-300 ${selectedTimeline === val
                                    ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                                    : "bg-slate-900/50 border-border/50 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
                                  }`}
                              >
                                {val}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Project Details textarea */}
                        <div className="space-y-2 pt-2">
                          <Label htmlFor="message" className="text-slate-300 text-sm font-semibold">Project Details *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe your design criteria, target audience, integration rules, and timeline details..."
                            rows={5}
                            className="bg-slate-900/50 border-border/60 rounded-xl focus-visible:ring-primary/30 resize-none"
                            required
                          />
                        </div>

                        {/* Send Action */}
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-13 rounded-xl gradient-primary border-0 text-white font-bold group"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Compiling & Dispatching Request..."
                          ) : (
                            <>
                              Submit Briefing Request
                              <Send className="ml-2 h-4.5 w-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </Button>

                        <div className="flex items-center gap-2 justify-center py-2 border-t border-border/40 text-[10px] text-muted-foreground mt-4">
                          <Shield className="w-3.5 h-3.5 text-accent animate-pulse" />
                          We enforce end-to-end NDA rules. All records remain fully confidential.
                        </div>
                      </form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
