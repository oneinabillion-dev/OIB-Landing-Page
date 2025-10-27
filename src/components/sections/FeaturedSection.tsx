import { motion } from "framer-motion";

const FeaturedSection = () => {
  const logos = [
    { name: "Forbes", logo: "FORBES" },
    { name: "Bloomberg", logo: "BLOOMBERG" },
    { name: "CoinTelegraph", logo: "COINTELEGRAPH" },
    { name: "The Wall Street Journal", logo: "WSJ" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-8">
            Featured In
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <span className="text-lg font-light tracking-wide text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                {logo.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;