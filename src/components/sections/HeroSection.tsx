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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-3 xs:px-4 sm:px-6 md:px-8 pt-14 xs:pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 xs:opacity-25 sm:opacity-30 md:opacity-40 lg:opacity-50 z-0">
        <div className="absolute top-16 xs:top-20 sm:top-24 right-0 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-96 h-0 shadow-[0_0_200px_6px_rgba(255,255,255,0.2)] xs:shadow-[0_0_250px_7px_rgba(255,255,255,0.25)] sm:shadow-[0_0_300px_8px_rgba(255,255,255,0.3)] md:shadow-[0_0_500px_12px_rgba(255,255,255,0.35)] lg:shadow-[0_0_700px_15px_rgba(255,255,255,0.4)] rotate-[-30deg] z-0"></div>
      </div>
      
      <div //className="container mx-auto relative z-10">
      className="w-full px-4 sm:px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="max-w-full lg:max-w-2xl text-center lg:text-left order-2 lg:order-1">
            {/* Tag */}
            <div 
              className="relative w-48 xs:w-56 sm:w-64 md:w-72 h-8 xs:h-9 sm:h-10 rounded-full mb-6 xs:mb-7 sm:mb-8 mx-auto lg:mx-0 animate-gradient-flow"
              style={{
                background: 'linear-gradient(to right, #656565, #7f42a7, #6600c5, #5300a0, #757575, #656565)',
                backgroundSize: '200%',
              }}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <div className="absolute inset-[2px] xs:inset-[3px] bg-background rounded-full flex items-center justify-center transition-all duration-500 hover:text-primary cursor-pointer">
                <span className="text-xs xs:text-sm sm:text-base font-medium tracking-wider">INTRODUCING</span>
              </div>
            </div>

            <h1 
              className="text-4xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-tight text-shadow-glow"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              One In a Billion <br /> Chance for <span className="bg-gradient-primary bg-clip-text text-transparent">
                ENTREPRENEURS
              </span>
            </h1>
            
            <p 
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 max-w-full lg:max-w-xl leading-relaxed"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Empowering businesses to innovate and grow with tailored AI solutions, 
              expert consulting, and seamless technology integration for the future.
            </p>
            
            <div 
              className="flex flex-col gap-3 xs:gap-4 items-center justify-center lg:justify-start"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="0"
              data-aos-duration="1600"
            >
              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-2.5 xs:gap-3 sm:gap-4 items-center w-full max-w-xl -ml-20">
                <NeumaButton
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="text-xs xs:text-sm sm:text-base md:text-lg px-4 xs:px-6 sm:px-8 md:px-10 w-full sm:w-auto hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 xs:gap-3 h-10 xs:h-11 sm:h-12 md:h-14"
                >
                  <span className="whitespace-nowrap">Connect with Consultant</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80 xs:w-5 xs:h-5 sm:w-5 sm:h-5 flex-shrink-0">
                    <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </NeumaButton>
                <NeumaButton
                  size="lg"
                  onClick={() => {
                    window.location.href = "https://chat.myoib.com";
                  }}
                  className="text-xs xs:text-sm sm:text-base md:text-lg px-4 xs:px-6 sm:px-8 md:px-10 font-bold w-full sm:w-auto hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 xs:gap-3 h-10 xs:h-11 sm:h-12 md:h-14"
                >
                  <span className="whitespace-nowrap">My OIB</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-80">
                    <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </NeumaButton>
              </div>

              {/* AI Prompt Input */}
              <div className="relative w-full max-w-2xl">
                <div className="relative group">
                  <input
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={displayText}
                    className="w-full h-10 xs:h-11 sm:h-12 md:h-14 px-4 xs:px-5 sm:px-6 pr-12 xs:pr-14 sm:pr-16 rounded-xl xs:rounded-xl sm:rounded-2xl bg-background/10 backdrop-blur-lg border border-border/20 text-sm xs:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  />
                  <button 
                    onClick={handleSubmit}
                    aria-label="Send prompt to My OIB"
                    className="absolute right-1.5 xs:right-2 top-1/2 -translate-y-1/2 w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg xs:rounded-xl bg-gradient-primary hover:scale-110 hover:shadow-neuma-glow transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-85">
                      <path d="M5 11H19M19 11L15 7M19 11L15 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 13H17" stroke="black" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
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
                    __html: `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.53/build/spline-viewer.js"></script>
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
                  __html: `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.85/build/spline-viewer.js"></script>
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