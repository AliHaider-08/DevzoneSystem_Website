import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
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
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "03250075364",
    link: "tel:03250075364",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    content: "+92 325 0075364",
    link: "https://wa.me/923250075364",
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
          message: formData.message,
          _subject: `New Contact Inquiry from ${formData.name}`,
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

        // Reset form after 5 seconds
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
        description="Get in touch with DevZone System for a free consultation. We're here to help with web development, mobile apps, UI/UX design, and all your tech needs."
        keywords="contact DevZone System, get a quote, tech consultation, web development inquiry, software development contact"
        url="https://devzonesystem.com/contact"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Let's <span className="text-gradient">Start a Conversation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-8 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-card border-border/50">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground text-sm hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm">{info.content}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}


              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-card border-border/50">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (234) 567-890"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Category *</Label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => setFormData({ ...formData, category: value, subcategory: "" })}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceCategories.map((cat) => (
                                <SelectItem key={cat.category} value={cat.category}>
                                  {cat.category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="subcategory">Specific Service *</Label>
                          <Select
                            value={formData.subcategory}
                            onValueChange={(value) => setFormData({ ...formData, subcategory: value })}
                            required
                            disabled={!formData.category}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={formData.category ? "Select Service" : "Choose a category first"} />
                            </SelectTrigger>
                            <SelectContent>
                              {formData.category &&
                                serviceCategories.find(c => c.category === formData.category)?.subcategories.map((sub) => (
                                  <SelectItem key={sub} value={sub}>
                                    {sub}
                                  </SelectItem>
                                ))
                              }
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, goals, and timeline..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-primary border-0"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </form>
                  )}
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
