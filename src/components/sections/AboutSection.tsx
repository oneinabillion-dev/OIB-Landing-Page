import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
            About One In a Billion
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
              Where rare innovation meets real results - One In a Billion transforms businesses 
              through cutting-edge AI solutions and strategic consulting.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in bridging the gap between visionary ideas and practical 
              implementation. Our team of AI experts and business strategists work 
              alongside entrepreneurs to unlock unprecedented growth opportunities 
              through intelligent automation, data-driven insights, and scalable 
              technology solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Industry Verticals</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;