import { motion } from "framer-motion";
import { ClipboardText, Code, Scales, Megaphone } from "phosphor-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ClipboardText,
      title: "Idea Validation & Business Planning",
      description: "Market research\nStrategic business model creation\nTransforming abstract ideas into actionable plans"
    },
    {
      icon: Code,
      title: "Design and Development Services",
      description: "Brand identity and product design\nApp & web development\nEnd-to-end product development"
    },
    {
      icon: Scales,
      title: "Legal & Administrative Setup",
      description: "Company registration\nCompliance and contracts\nLegal advisory"
    },
    {
      icon: Megaphone,
      title: "Marketing & Go-to-Market Strategy",
      description: "Brand positioning\nDigital campaigns\nPR, and launch strategy"
    }
  ];

  return (
    <section id="features" className="py-12 md:py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-accent/5 transition-colors group"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon size={24} weight="light" className="text-primary" />
              </div>
              
              <h3 className="text-lg font-light tracking-tight mb-3">
                {feature.title}
              </h3>
              
              <div className="text-sm text-muted-foreground whitespace-pre-line">
                {feature.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;