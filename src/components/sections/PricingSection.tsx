import { motion } from "framer-motion";
import { Check, Star } from "phosphor-react";
import { NeumaButton } from "@/components/ui/neuma-button";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();

  const plan = {
    name: "Build Your Dream",
    price: "Custom",
    period: "/project",
    description: "Tailored solutions for large-scale transformations",
    features: [
      "Includes everything from Pro Pack with unlimited consultation",
      "Dedicated full-fledged team (designers, developers, managers, legal advisors)",
      "Hiring support to recruit and onboard your permanent team",
      "End-to-end setup: branding, development, marketing, and execution",
      "Ongoing mentorship and growth planning",
      "Highly customizable package tailored to your business vision and scale",
      "Perfect for founders ready to transform their idea into a sustainable company"
    ],
    recommended: true
  };

  return (
    <section id="pricing" className="py-12 md:py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
            Investment Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the AI transformation package that aligns with your business goals
          </p>
        </motion.div>

        <div className="flex justify-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative glass rounded-2xl p-8 max-w-md w-full ${
              plan.recommended ? 'ring-2 ring-primary/50' : ''
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={14} weight="fill" />
                  Recommended
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-light tracking-tight mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-light text-primary">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  <Check size={16} weight="bold" className="text-primary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => navigate("/contact")}
              className="w-full h-12 px-6 py-3 rounded-xl text-sm font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 transform-gpu neuma-btn text-primary-foreground"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;