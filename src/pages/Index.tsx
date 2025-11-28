import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import InitiativesSection from "@/components/home/InitiativesSection";
import TransparencySection from "@/components/home/TransparencySection";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import HowToHelpSection from "@/components/home/HowToHelpSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EventsSection from "@/components/home/EventsSection";
import PartnersSection from "@/components/home/PartnersSection";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <InitiativesSection />
        <ImpactMetrics />
        <TransparencySection />
        <HowToHelpSection />
        <TestimonialsSection />
        <EventsSection />
        <PartnersSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
