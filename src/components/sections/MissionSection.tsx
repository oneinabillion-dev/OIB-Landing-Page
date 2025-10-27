import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
            Our Mission
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
              We believe that advanced AI trading technology should be accessible to everyone, 
              not just institutional investors.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Lunexa was built to democratize crypto trading by providing retail investors 
              with the same sophisticated tools and algorithms that were previously only 
              available to hedge funds and trading firms. Our mission is to level the 
              playing field and help individuals achieve their financial goals through 
              intelligent, automated trading strategies.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">$2.4B</div>
                <div className="text-sm text-muted-foreground">Volume Traded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;