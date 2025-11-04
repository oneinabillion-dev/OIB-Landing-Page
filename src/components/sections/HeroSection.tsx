import { motion } from "framer-motion";
import { NeumaButton } from "@/components/ui/neuma-button";
import { useState, useEffect } from "react";
import type React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [promptText, setPromptText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Ask My OIB anything...";

  useEffect(() => {
    const words = fullText.split(" ");
    let currentWordIndex = 0;
    let currentText = "";

    const typeWriter = () => {
      if (currentWordIndex < words.length) {
        currentText += (currentWordIndex === 0 ? "" : " ") + words[currentWordIndex];
        setDisplayText(currentText);
        currentWordIndex++;
        setTimeout(typeWriter, 300); // 300ms delay between words
      }
    };

    const timer = setTimeout(() => {
      typeWriter();
    }, 2000); // Start after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Fix for Spline model URLs - redirect to relative /contact path
  useEffect(() => {
    // Override window.location.href to catch Spline navigation attempts
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Check if we're trying to navigate to any contact URL and redirect to relative path
      if (window.location.href.includes('/contact')) {
        event.preventDefault();
        // Use the same navigation logic as the Connect with Consultant button
        navigate('/contact');
        return false;
      }
    };

    // Override window.open to catch Spline button clicks
    const originalOpen = window.open;
    window.open = function(url?: string | URL, target?: string, features?: string) {
      if (url && typeof url === 'string' && url.includes('/contact')) {
        // Use relative navigation instead of absolute URL
        navigate('/contact');
        return null;
      }
      return originalOpen.call(this, url, target, features);
    };

    // Listen for clicks on elements that might be Spline buttons
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.closest('spline-viewer')) {
        // Check if this might be a navigation attempt
        setTimeout(() => {
          if (window.location.href.includes('/contact')) {
            navigate('/contact');
          }
        }, 100);
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', handleClick);
      window.open = originalOpen;
    };
  }, [navigate]);

  const handleSubmit = () => {
    const trimmed = promptText.trim();
    if (trimmed) {
      window.location.href = `https://chat.myoib.com?prompt=${encodeURIComponent(trimmed)}`;
    } else {
      window.location.href = "https://chat.myoib.com";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section id="hero" className="relative min-h-[75vh] flex flex-col justify-start px-3 xs:px-4 sm:px-6 md:px-8 pt-0 pb-8 md:pb-10 overflow-hidden">
      {/* Background gradient effect */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="opacity-20 xs:opacity-25 sm:opacity-30 md:opacity-40 lg:opacity-50 h-full">
          <motion.div 
            className="absolute top-16 xs:top-20 sm:top-24 right-0 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-96 h-0 shadow-[0_0_200px_6px_rgba(255,255,255,0.2)] xs:shadow-[0_0_250px_7px_rgba(255,255,255,0.25)] sm:shadow-[0_0_300px_8px_rgba(255,255,255,0.3)] md:shadow-[0_0_500px_12px_rgba(255,255,255,0.35)] lg:shadow-[0_0_700px_15px_rgba(255,255,255,0.4)] rotate-[-30deg] z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
          ></motion.div>
        </div>
      </motion.div>
      
      <div //className="container mx-auto relative z-10">
      className="w-full px-2 sm:px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="max-w-full lg:max-w-2xl text-center lg:text-left -mt-0">
            <h1 
              className="text-[34px] xs:text-[34px] sm:text-[34px] md:text-[34px] lg:text-[46px] xl:text-[58px] font-semibold tracking-tight mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 leading-[1.1] text-shadow-glow"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              The only bridge from <br /> <span className="whitespace-nowrap">conception to<span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(96.51deg, #34A853 0%, #34A853 100%)'}}> Domination</span></span>
            </h1>
            
            <p 
              className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-muted-foreground mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 max-w-full lg:max-w-xl leading-tight"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Empowering businesses to innovate and grow with tailored AI solutions, 
              expert consulting, and seamless technology integration for the future.
            </p>
            
            <div 
              className="w-full max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="0"
              data-aos-duration="1600"
            >
              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <NeumaButton
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="text-xs xs:text-sm sm:text-base md:text-lg px-3 xs:px-6 sm:px-8 md:px-10 w-full sm:w-auto sm:flex-shrink-0 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 xs:gap-3 h-10 xs:h-11 sm:h-12 md:h-14 min-w-0"
                >
                  <span className="whitespace-nowrap sm:whitespace-normal">Connect with Consultant</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80 xs:w-5 xs:h-5 sm:w-5 sm:h-5 flex-shrink-0">
                    <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </NeumaButton>
                <NeumaButton
                  size="lg"
                  onClick={() => {
                    window.location.href = "https://chat.myoib.com";
                  }}
                  className="text-xs xs:text-sm sm:text-base md:text-lg px-3 xs:px-6 sm:px-8 md:px-10 font-bold w-full sm:flex-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 xs:gap-3 h-10 xs:h-11 sm:h-12 md:h-14 min-w-0"
                >
                  <span className="whitespace-nowrap">My OIB</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-80 flex-shrink-0">
                    <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </NeumaButton>
              </div>

              {/* AI Prompt Input */}
              <div className="relative w-full mt-3 sm:mt-4">
                <div className="relative group">
                  <input
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={displayText}
                    className="w-full h-10 xs:h-11 sm:h-12 md:h-14 px-3 xs:px-5 sm:px-6 pr-10 xs:pr-14 sm:pr-16 rounded-xl xs:rounded-xl sm:rounded-2xl bg-background/10 backdrop-blur-lg border border-border/20 text-sm xs:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  />
                  <button 
                    onClick={handleSubmit}
                    aria-label="Send prompt to My OIB"
                    className="absolute right-1.5 xs:right-2 top-1/2 -translate-y-1/2 w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg xs:rounded-xl bg-gradient-primary hover:scale-110 hover:shadow-neuma-glow transition-all duration-300 flex items-center justify-center group text-white antialiased"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-85">
                      <path d="M5 11H19M19 11L15 7M19 11L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 13H17" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Spline Model */}
          <div className="relative z-0 pointer-events-none order-1 lg:order-2 overflow-hidden">
            {/* Mobile/Tablet View */}
            <div className="block lg:hidden relative">
              <div 
                className="w-full h-48 xs:h-56 sm:h-64 md:h-80 relative mx-auto"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="150"
                data-aos-duration="1600"
              >
                <div 
                  className="absolute inset-0 w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] scale-10"
                  dangerouslySetInnerHTML={{
                    __html: `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.92/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/KQiUJMVrjxNI9IWR/scene.splinecode"></spline-viewer>`
                  }}
                />
              </div>
            </div>
            
            {/* Desktop View */}
            <div className="hidden lg:block transform translate-x-[20%] xl:translate-x-[30%] scale-110 xl:scale-130">
            <div 
              className="w-full h-[480px] xl:h-[600px] 2xl:h-[720px] relative"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="150"
              data-aos-duration="1600"
            >
              <div 
                className="absolute inset-0 w-[100%] h-[130%] -translate-x-[15%] -translate-y-[15%]"
                dangerouslySetInnerHTML={{
                  __html: `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.92/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/RveWLq4mLjG8aOBd/scene.splinecode"></spline-viewer>`
                }}
              />
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;