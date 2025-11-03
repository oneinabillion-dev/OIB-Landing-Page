import { motion } from "framer-motion";
import { X, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleFooterLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      // If it's a hash link (Features, Pricing, How it Works)
      if (isHomePage) {
        // If on homepage, just scroll to the section
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If on other pages, navigate to homepage with hash
        navigate(`/${href}`);
      }
    } else {
      // If it's a regular page link, navigate normally
      navigate(href);
    }
  };

  // Handle hash navigation when component mounts
  useEffect(() => {
    if (isHomePage && location.hash) {
      // If we're on homepage and there's a hash, scroll to that section
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isHomePage, location.hash]);

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" }
    ]
  };

  const socialLinks = [
    { icon: X, href: "", name: "X (Twitter)" },
    { icon: InstagramLogo, href: "", name: "Instagram" },
    { icon: LinkedinLogo, href: "", name: "LinkedIn" }
  ];

  return (
    <footer className="py-20 px-6 border-t border-border/20">
      <div //className="container mx-auto">
      className="w-full px-4">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/images/White_Logo.png" 
                  alt="One In a Billion Logo - OIB AI Consultancy" 
                  className="w-8 h-8 flex-shrink-0" 
                />
                <div className="flex flex-col">
                  <span className=" font-medium tracking-tight text-foreground antialiased text-2xl font-light tracking-tight text-foreground">
                    One In a Billion
                  </span>
                  <span className="font-medium tracking-tight text-foreground antialiased text-xs text-muted-foreground -mt-1 tracking-wider">
                    RARE MEETS REAL
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering businesses with cutting-edge AI solutions and strategic consulting. 
                Where rare innovation meets real results.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <div
                    key={social.name}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-accent/10 transition-colors cursor-default"
                    aria-label={social.name}
                  >
                    <social.icon size={18} weight="light" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleFooterLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleFooterLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleFooterLinkClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} One In a Billion. All rights reserved.
          </p>
        
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;