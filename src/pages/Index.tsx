import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { PlatformBar } from "@/components/landing/PlatformBar";
import { PainSection } from "@/components/landing/PainSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ProofSection } from "@/components/landing/ProofSection";
import { CaseStudiesSection } from "@/components/landing/CaseStudiesSection";
import { VideoTestimonialsSection } from "@/components/landing/VideoTestimonialsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CalculatorSection } from "@/components/landing/CalculatorSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PlatformBar />
      <PainSection />
      <ServicesSection />
      <ProofSection />
      <CaseStudiesSection />
      <VideoTestimonialsSection />
      <TestimonialsSection />
      <FAQSection />
      <CalculatorSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
