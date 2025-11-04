import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "phosphor-react";
import { NeumaButton } from "@/components/ui/neuma-button";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  isHomePage?: boolean;
}

const Navigation = ({ isHomePage = false }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ABOUT US", href: "#about" },
    { name: "FEATURES", href: "#features" },
    { name: "PRICING", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on other pages, navigate to homepage with hash
      navigate(`/${href}`);
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      // If on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on other pages, navigate to homepage
      navigate('/');
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass backdrop-blur-xl" : ""
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18 px-4">
            {/* Logo */}
            <div 
              className="flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer min-w-0 flex-shrink-0"
              onClick={handleLogoClick}
              data-aos="fade-down" 
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
            >
              <img 
                src="/images/White_Logo.png" 
                alt="One In a Billion Logo - OIB AI Consultancy" 
                className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex-shrink-0" 
              />
              <div className="flex flex-col min-w-0">
                <span className="font-medium tracking-tight text-foreground antialiased text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light tracking-tight text-foreground transition-all duration-500 truncate">
                  One In a Billion
                </span>
                <span className="font-medium tracking-tight text-foreground antialiased text-[10px] xs:text-xs sm:text-xs text-muted-foreground tracking-wider transition-all duration-500 truncate pl-[3px]">
                  RARE MEETS REAL
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-6 xl:space-x-8 2xl:space-x-12">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-xs xl:text-sm font-medium text-muted-foreground hover:text-white hover:scale-105 transition-all duration-500 tracking-wider whitespace-nowrap px-4 min-w-[100px] text-center"
                  data-aos="fade-down"
                  data-aos-duration={1200 + (index * 200)}
                  data-aos-delay={index * 0}
                  data-aos-easing="ease-in-out-cubic"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-1.5 md:gap-2 lg:gap-3 flex-shrink-0">
              <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 1.06 }} className="will-change-transform">
                <NeumaButton
                  onClick={() => { window.location.href = "https://chat.myoib.com/login"; }}
                  size="lg"
                  className="h-10 px-4 sm:px-5 md:px-6 rounded-full text-xs sm:text-xs md:text-sm font-medium transition-transform duration-300 tracking-wide relative whitespace-nowrap hover:shadow-glow focus:shadow-glow focus:outline-none"
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  data-aos-delay="250"
                  data-aos-easing="ease-in-out-cubic"
                >
                  <span className="hidden md:inline lg:inline">SIGN IN</span>
                  <span className="md:hidden">SIGN</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white transform transition-transform duration-150 ease-in-out group-hover:translate-x-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </NeumaButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden w-8 h-8 xs:w-9 xs:h-9 flex items-center justify-center glass rounded-lg flex-shrink-0"
            >
              <List size={16} weight="light" className="xs:w-5 xs:h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 sm:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Tray */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-72 xs:w-80 max-w-[85vw] glass border-l border-border p-4 xs:p-6"
            >
              <div className="flex items-center justify-between mb-6 xs:mb-8">
                <span className="text-lg xs:text-xl font-light tracking-tight">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center glass rounded-lg"
                >
                  <X size={16} weight="light" className="xs:w-5 xs:h-5" />
                </button>
              </div>

              <div className="space-y-4 xs:space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-base xs:text-lg font-light text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Sign In Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-6"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.05 }}
                >
                  <NeumaButton
                    onClick={() => { window.location.href = "https://chat.myoib.com/login"; }}
                    size="lg"
                    className="h-11 w-full rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 transition-transform duration-300 hover:shadow-glow focus:shadow-glow focus:outline-none"
                  >
                    SIGN IN
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </NeumaButton>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;