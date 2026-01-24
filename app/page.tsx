import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import NoHeadacheSection from "@/components/NoHeadacheSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Before/After Demo Section */}
      <DemoSection />

      {/* No Headache Section */}
      <NoHeadacheSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="905XXXXXXXXX" // Replace with your actual WhatsApp number
        message="Merhaba Berkay! Web siteniz hakkında bilgi almak istiyorum."
      />
    </main>
  );
}
