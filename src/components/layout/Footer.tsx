import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Solutions",
    "AI Integration",
    "Consulting",
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">D</span>
              </div>
              <span className="font-bold text-xl">
                Dev<span className="text-primary">Zone</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We transform ideas into powerful digital solutions. Your vision, our expertise – together we build the future.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-accent transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:info@devzonesystem.com" className="hover:text-accent transition-all duration-200">
                    info@devzonesystem.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:+15551234567" className="hover:text-accent transition-all duration-200">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <span>Tech Hub, Silicon Valley, CA 94025</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-muted border-0"
                />
                <Button className="gradient-primary border-0 shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DevZone System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-all duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-all duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
