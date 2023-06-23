import Header from "@/components/Header";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import FAQSection from "@/sections/FAQSection";
import Footer from "@/sections/FooterSection";
import CTASection from "@/sections/CTASection";

export const metadata = {
  title: "Bora Rachar | Página inicial",
  description: "...",
};

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
