import { motion } from "framer-motion";
import { Brain, Shield, TrendUp, Lightbulb } from "phosphor-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Strategy Development",
      description: "Custom AI solutions tailored to your business needs with advanced machine learning capabilities"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols ensuring your data and business intelligence remain protected"
    },
    {
      icon: TrendUp,
      title: "Growth Optimization",
      description: "Data-driven insights and automation strategies to accelerate your business growth"
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Expert guidance on emerging technologies and digital transformation strategies"
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
              
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;