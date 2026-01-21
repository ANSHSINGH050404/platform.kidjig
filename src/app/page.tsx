import Hero from "@/components/sections/Hero";
import ProviderLogos from "@/components/sections/ProviderLogos";
import PlatformOverview from "@/components/sections/PlatformOverview";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />

      <Hero />
      <ProviderLogos />
      <PlatformOverview />
      <CTASection />

      <Footer />
    </div>
  );
}
