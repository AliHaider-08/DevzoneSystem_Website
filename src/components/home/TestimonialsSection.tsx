import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
  content: string;
  rating: number;
  date?: string;
}

const staticTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hire Expert Executive",
    role: "Pakistan Software Export Board",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "The Hire Expert platform has been instrumental in empowering our national digital economy. Devzone System delivered a scalable, professional solution that exceeded our expectations for PSEB.",
    rating: 5,
  },
  {
    id: 2,
    name: "E-Healthcare Founder",
    role: "Healthcare Connect",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    content: "Our E-Healthcare platform's integration of AI chatbots and real-time consultations has revolutionized how we serve patients. The technical expertise of the team is truly world-class.",
    rating: 5,
  },
  {
    id: 3,
    name: "Media Hub Director",
    role: "AI Podcast Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "The Podcast AI Agent transformed our content strategy. Automated transcript analysis and brand-aligned interactions have significantly increased our listener engagement levels.",
    rating: 5,
  },
];

const getInitials = (name: string) => {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

const TestimonialsSection = () => {
  const [list, setList] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [image, setImage] = useState("");

  // Initialize
  useEffect(() => {
    const saved = localStorage.getItem("devzone_testimonials");
    if (saved) {
      try {
        setList(JSON.parse(saved));
      } catch (e) {
        setList(staticTestimonials);
      }
    } else {
      setList(staticTestimonials);
      localStorage.setItem("devzone_testimonials", JSON.stringify(staticTestimonials));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!role.trim()) {
      toast.error("Please enter your company or designation");
      return;
    }
    if (content.trim().length < 10) {
      toast.error("Feedback must be at least 10 characters");
      return;
    }

    const newFeedback: Testimonial = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim(),
      content: content.trim(),
      rating,
      image: image.trim() || undefined,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newFeedback, ...list];
    setList(updated);
    localStorage.setItem("devzone_testimonials", JSON.stringify(updated));

    // Clear form
    setName("");
    setRole("");
    setContent("");
    setRating(5);
    setImage("");
    setIsModalOpen(false);

    toast.success("Thank you! Your review has been published successfully.");
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-4 mb-4"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Real reviews from businesses who transformed their operations and digital footprint with us.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {list.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                layout
              >
                <Card className="h-full bg-card border-border/50 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group flex flex-col justify-between">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Quote Icon */}
                      <Quote className="h-10 w-10 text-accent/30 mb-4 group-hover:text-accent/50 transition-colors" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating
                                ? "fill-accent text-accent"
                                : "text-border"
                              }`}
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border border-border"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-br from-primary to-accent text-white border border-border">
                          {getInitials(testimonial.name)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-sm leading-none mb-1">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Submission CTA */}
        <div className="flex justify-center mt-12">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary border-0 rounded-full shadow-lg hover:shadow-primary/30 py-6 px-8 flex items-center gap-2 group text-white">
                <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                Share Your Experience
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px] bg-slate-900 border border-white/10 text-white rounded-3xl backdrop-blur-lg">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold tracking-tight text-white">Evaluate Our Work</DialogTitle>
                <DialogDescription className="text-slate-400">
                  Your feedback helps us grow. Share your project experience with other users.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-5 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300 text-sm font-semibold">Your Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="bg-slate-800/80 border-slate-700 text-white placeholder-slate-500 rounded-xl focus-visible:ring-primary/40 focus-visible:border-primary/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-slate-300 text-sm font-semibold">Designation / Company <span className="text-red-500">*</span></Label>
                  <Input
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Founder at TechCorp"
                    className="bg-slate-800/80 border-slate-700 text-white placeholder-slate-500 rounded-xl focus-visible:ring-primary/40 focus-visible:border-primary/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300 text-sm font-semibold block">Star Rating <span className="text-red-500">*</span></Label>
                  <div className="flex gap-1 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
                      >
                        <Star
                          className={`h-7 w-7 transition-colors duration-150 ${star <= (hoverRating ?? rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-600 hover:text-slate-500"
                            }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image" className="text-slate-300 text-sm font-semibold">Profile Photo URL <span className="text-xs text-slate-500">(Optional)</span></Label>
                  <Input
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="bg-slate-800/80 border-slate-700 text-white placeholder-slate-500 rounded-xl focus-visible:ring-primary/40 focus-visible:border-primary/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-slate-300 text-sm font-semibold">Your Review <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Tell us about the project quality, team communication, and final results..."
                    rows={4}
                    className="bg-slate-800/80 border-slate-700 text-white placeholder-slate-500 rounded-xl focus-visible:ring-primary/40 focus-visible:border-primary/40 resize-none"
                    required
                  />
                </div>
                <div className="pt-2 flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="gradient-primary border-0 rounded-xl px-6 text-white"
                  >
                    Submit Review
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
