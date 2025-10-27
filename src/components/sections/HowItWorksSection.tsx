import { motion } from "framer-motion";
import { Wallet, Robot, ChartLineUp } from "phosphor-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Your Wallet",
      description: "Securely link your crypto wallet to our platform with enterprise-grade security",
      image: "wallet-connection"
    },
    {
      icon: Robot,
      title: "Set Up Your AI Assistant",
      description: "Configure your personal AI trading assistant with your risk preferences and goals",
      image: "ai-setup"
    },
    {
      icon: ChartLineUp,
      title: "Automate Your Trading",
      description: "Let our AI execute optimal trades 24/7 while you focus on what matters most",
      image: "automated-trading"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with AI-powered crypto trading in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 text-center h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-medium text-primary-foreground">
                  {index + 1}
                </div>

                {/* Icon placeholder - using geometric shapes for visual appeal */}
                <div className="w-20 h-20 mx-auto mb-6 glass rounded-2xl flex items-center justify-center">
                  <step.icon size={32} weight="light" className="text-primary" />
                </div>

                <h3 className="text-xl font-light tracking-tight mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connecting line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;