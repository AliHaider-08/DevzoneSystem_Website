import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import { generateWebsiteSchema, generateLocalBusinessSchema } from "@/lib/structured-data";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebsiteSchema(),
      generateLocalBusinessSchema(),
    ],
  };

  return (
    <Layout>
      <SEO
        title="Digital Solutions & Web Development Agency"
        description="Transform your ideas into powerful digital solutions. We specialize in web development, mobile apps, UI/UX design, cloud solutions, and AI integration. 150+ projects delivered with 99% client satisfaction."
        keywords="web development agency, mobile app development, UI/UX design, cloud solutions, AI integration, tech consulting, digital transformation, software development company"
        url="https://haidertech.com"
        structuredData={structuredData}
      />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
