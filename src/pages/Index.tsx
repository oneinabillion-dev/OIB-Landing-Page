import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import ShaderBackground from "@/components/ui/shader-background";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  // SEO for homepage
  useSEO({
    title: "One In a Billion (OIB) - Rare Meets Real | My OIB",
    description: "One In a Billion (OIB) empowers entrepreneurs and businesses with cutting-edge AI solutions, expert consulting, and startup incubation. Transform your rare ideas into real ventures with My OIB.",
    canonical: "https://myoib.com/",
    ogTitle: "One In a Billion (OIB) - Rare Meets Real",
    ogDescription: "One In a Billion (OIB) empowers entrepreneurs and businesses with cutting-edge AI solutions, expert consulting, and startup incubation.",
    ogImage: "https://myoib.com/favicons/OIB-LOGO.png",
    breadcrumbs: [
      { name: "Home", url: "https://myoib.com/" }
    ]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative"
    >
      <ShaderBackground />
      {/* Blur overlay layer */}
      <div className="fixed top-0 left-0 w-full h-full -z-[9] bg-background/20 pointer-events-none" />
      <Navigation isHomePage={true} />
      {/* Introducing Tag - Centered below navbar */}
      <div className="flex justify-center items-center pt-16 sm:pt-20 lg:pt-24 pb-0 mb-3 sm:mb-0 relative z-10">
        <div 
          className="relative w-48 xs:w-56 sm:w-64 md:w-72 h-8 xs:h-9 sm:h-10 rounded-full animate-gradient-flow"
          style={{
            background: 'linear-gradient(to right, #0F2027, #1a4535, #256b43, #34A853, #256b43, #1a4535, #0F2027)',
            backgroundSize: '200%',
          }}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-duration="900"
        >
          <div className="absolute inset-[2px] xs:inset-[3px] bg-background rounded-full flex items-center justify-center transition-all duration-500 hover:text-primary cursor-pointer">
            <span className="text-xs xs:text-sm sm:text-base font-medium tracking-wider">Introducing</span>
          </div>
        </div>
      </div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
