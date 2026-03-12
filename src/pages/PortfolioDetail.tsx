import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe, Layout as LayoutIcon, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hireExpertImg from "@/assets/HireExpert.png";
import desiDelightImg from "@/assets/DesiDelight.jpg";
import noirEssenceImg from "@/assets/Noir Essence.jpg";
import hospitalImg from "@/assets/Hospital.jpg";
import eHealthcareImg from "@/assets/EHealthcare.png";
import dashboardImg from "@/assets/Dashbaord.png";

const projects = [
    {
        id: 0,
        title: "Hire Expert",
        category: "Web Development",
        description: "A comprehensive freelancing platform developed for the Pakistan Software Export Board to empower the national digital economy.",
        image: hireExpertImg,
        technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "AWS"],
        client: "Pakistan Software Export Board (PSEB)",
        website: "https://hireexpert.gov.pk",
        duration: "6 Months",
        role: "Lead Development Partner",
        results: "National-scale freelance ecosystem",
        features: [
            "Advanced Skill-based Search",
            "Real-time Bidding System",
            "Secure Payment Gateway Integration",
            "Dynamic User Dashboards",
            "Admin Control Panel",
            "Automated Milestone Tracking"
        ],
        challenge: "Creating a reliable, transparent, and scalable platform that could handle thousands of concurrent users while maintaining strict security standards for government-backed infrastructure.",
        solution: "We implemented a highly scalable MERN stack architecture with multi-layer authentication and real-time state synchronization."
    },
    {
        id: 1,
        title: "Desi Delight",
        category: "Web Development",
        description: "A premium restaurant website featuring an interactive menu, online reservations, and a vibrant showcase of traditional cuisine.",
        image: desiDelightImg,
        technologies: ["React", "Custom CSS", "Framer Motion"],
        client: "Restaurant Client",
        results: "Modern digital dining experience",
        features: ["Interactive Menu", "Online Reservations", "Responsive Design", "Custom Animations"],
        challenge: "Developing a visually appealing interface that captures the essence of traditional dining while maintaining modern performance standards.",
        solution: "We used Framer Motion for smooth transitions and a custom CSS architecture to create a warm, inviting atmosphere."
    },
    {
        id: 2,
        title: "Noir Essence",
        category: "Web Development",
        description: "A luxury e-commerce experience for a premium perfume brand, featuring a sophisticated scent explorer and elegant product showcases.",
        image: noirEssenceImg,
        technologies: ["React.js", "Node.js", "Express.js"],
        client: "Noir Essence Luxury",
        results: "Premium brand transformation",
        features: ["Sophisticated Scent Explorer", "Elegant Product Showcase", "Secure Checkout", "Inventory Management"],
        challenge: "Capturing the luxury and 'essence' of a perfume brand through a digital interface that feels as high-end as the products themselves.",
        solution: "We developed a custom React frontend with subtle parallax effects and a robust Node/Express backend to handle secure transactions and inventory."
    },
    {
        id: 3,
        title: "Hospital Management System",
        category: "Web Development",
        description: "A comprehensive digital healthcare solution for managing patient records, appointments, and medical staff workflows efficiently.",
        image: hospitalImg,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
        client: "Medical Center",
        results: "Streamlined healthcare operations",
        features: ["Patient Records Management", "Doctor Scheduling", "Appointment Booking", "Billing & Invoicing"],
        challenge: "Designing a system that handles sensitive medical data while remaining intuitive for staff to use in high-pressure environments.",
        solution: "We implemented a MERN stack application with strict role-based access control and a clean, focused dashboard for different staff roles."
    },
    {
        id: 4,
        title: "E-Healthcare",
        category: "Web Development",
        description: "A complete digital health platform including an online medicine ordering system, virtual consultations, and AI-powered symptom diagnosis.",
        image: eHealthcareImg,
        technologies: ["React.js", "Node.js", "Express.js", "Socket.io"],
        client: "Healthcare Connect",
        results: "Integrated pharmaceutical ecosystem",
        features: ["Online Medicine Order System", "Online Consultation", "AI Chatbot System", "Secure Prescription Management"],
        challenge: "Building a unified platform that seamlessly bridges the gap between pharmacists, doctors, and patients while ensuring real-time communication.",
        solution: "We utilized Socket.io for real-time chat and consultations, and developed an intelligent chatbot system to assist users with preliminary symptom inquiries."
    },
    {
        id: 5,
        title: "SaaS Multi-Purpose Dashboard",
        category: "Web Development",
        description: "A versatile SaaS dashboard designed for comprehensive business management, featuring real-time analytics, user administration, and multi-tenant support.",
        image: dashboardImg,
        technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
        client: "SaaS Enterprise",
        results: "Centralized business management",
        features: ["Real-time Data Visualization", "Multi-tenant Architecture", "Role-based Access Control", "Automated Reporting", "Dark/Light Mode Support"],
        challenge: "Creating a highly customizable and performant dashboard that can aggregate data from various sources and present it in an actionable format for different user roles.",
        solution: "We implemented an modular architecture using React components and TypeScript, with a robust backend to handle complex data aggregation and multi-tenancy requirements."
    },
    {
        id: 6,
        title: "Financial Analytics Dashboard",
        category: "UI/UX Design",
        description: "Advanced data visualization and reporting dashboard for financial analytics.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["Angular", "D3.js", "Redis"],
        client: "FinTech Corp",
        results: "Advanced data visualization",
        features: ["Real-time Charts", "Custom Reports", "Data Export"],
        challenge: "Visualizing massive datasets in an intuitive way.",
        solution: "Utilized D3.js for highly interactive visualizations."
    },
    {
        id: 7,
        title: "AI-Powered Smart Vending Machine",
        category: "AI Integration",
        description: "Developed an AI-powered vending machine using RAG to recommend protein supplements and vitamin products based on user context and preferences. Integrated multimodal inputs (face recognition, text, voice) and a structured nutrition database.",
        image: "https://images.unsplash.com/photo-1585007600263-ad26c4800763?w=800&h=600&fit=crop",
        technologies: ["RAG", "Multimodal AI", "LangChain", "Face Recognition", "Python"],
        client: "Nutrition-Tech Client",
        results: "Personalized health recommendations",
        features: ["RAG-based Recommendation System", "Face Recognition Authentication", "Voice & Text Multimodal Input", "Structured Nutrition Database", "Context-Aware Interaction"],
        challenge: "Integrating multiple input modalities while maintaining high accuracy in medical/nutrition advice based on dynamic user context.",
        solution: "We implemented a custom RAG pipeline with LangChain for state management and used a high-accuracy multimodal processing layer for seamless user interaction."
    },
    {
        id: 8,
        title: "Podcast-AI-Agent-Development",
        category: "AI Integration",
        description: "Designed and deployed an LLM-based RAG system to process podcast transcripts, enabling content analysis, automated question generation, and advisory-style interactions aligned with the podcast’s brand voice.",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop",
        technologies: ["LangChain", "FAISS", "LLM Fine-tuning", "Python", "OpenAI"],
        client: "Media Hub",
        results: "Scalable content engagement",
        features: ["Automated Question Generation", "Dynamic Content Analysis", "Brand-Voice Aligned Advisory", "Efficient FAISS Vector Search", "LLM-Powered Insights"],
        challenge: "Maintaining a specific brand voice across thousands of transcript segments while ensuring factual consistency from the audio source.",
        solution: "We fine-tuned an LLM on the podcast's unique conversational style and combined it with a RAG system and FAISS for rapid, relevant knowledge retrieval."
    },
];

const PortfolioDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-40 text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Button asChild>
                        <Link to="/portfolio">Back to Portfolio</Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <SEO title={`${project.title} | DevZone Portfolio`} description={project.description} />

            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto px-4">
                    {/* Top Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12"
                    >
                        <Button variant="ghost" asChild className="hover:bg-primary/10 text-primary group">
                            <Link to="/portfolio" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Portfolio
                            </Link>
                        </Button>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Visuals */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-card border border-border/50 p-6 rounded-3xl">
                                    <div className="flex items-center gap-3 mb-2">
                                        <LayoutIcon className="h-5 w-5 text-primary" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</span>
                                    </div>
                                    <p className="font-bold">{project.category}</p>
                                </div>
                                <div className="bg-card border border-border/50 p-6 rounded-3xl">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Globe className="h-5 w-5 text-primary" />
                                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Client</span>
                                    </div>
                                    <p className="font-bold">{project.client}</p>
                                </div>
                            </div>

                            <div className="bg-muted/30 p-8 rounded-[2rem] border border-border/50">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Cpu className="h-5 w-5 text-primary" />
                                    Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <Badge key={tech} variant="secondary" className="px-4 py-1.5 bg-background text-foreground border-none shadow-sm hover:bg-primary/10 transition-colors">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-10"
                        >
                            <div>
                                <Badge className="bg-primary/10 text-primary border-none mb-4 px-4 py-1">Featured Project</Badge>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{project.title}</h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold flex items-center gap-2">
                                    <CheckCircle2 className="h-6 w-6 text-primary" />
                                    Key Features
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.features?.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-2xl border border-border/40 hover:border-primary/30 transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle2 className="h-3 w-3 text-primary" />
                                            </div>
                                            <span className="text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold flex items-center gap-2">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                    The Challenge & Solution
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">The Challenge</p>
                                        <p className="text-muted-foreground">{project.challenge}</p>
                                    </div>
                                    <div className="bg-accent/5 p-6 rounded-2xl border-l-4 border-accent">
                                        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">The Solution</p>
                                        <p className="text-muted-foreground">{project.solution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-border flex flex-wrap gap-6 items-center">
                                <Button asChild size="lg" className="h-14 px-10 rounded-full gradient-primary border-0 shadow-lg shadow-primary/20 group">
                                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                                        Visit Live Site <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full border-border">
                                    <Link to="/contact">Inquire About Similar Project</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PortfolioDetail;
