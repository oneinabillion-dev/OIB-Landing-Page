import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { Users, Lightbulb, Heart, Target, ArrowRight, EnvelopeSimple } from "phosphor-react";

const Careers = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We encourage bold thinking and creative problem-solving. Every idea matters, no matter how unconventional."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe the best solutions come from diverse teams working together towards a common goal."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "We're looking for people who are genuinely excited about transforming ideas into reality."
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description: "We invest in our team's development and provide opportunities to learn and advance."
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Flexible remote work options",
    "Professional development budget",
    "Health and wellness benefits",
    "Unlimited PTO policy",
    "Latest tech equipment and tools",
    "Team retreats and events",
    "Mentorship opportunities"
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                Join Our <span className="text-[#34A853]">Mission</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Help us build the future where every rare idea gets a chance to become real. 
                We're looking for passionate individuals who share our vision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* No Open Positions Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="glass rounded-3xl p-12">
                <div className="w-20 h-20 glass rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users size={32} weight="light" className="text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                  No Open Positions Right Now
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're not actively hiring at the moment, but we're always interested in connecting 
                  with talented individuals who share our passion for innovation and helping entrepreneurs succeed.
                </p>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    If you're excited about our mission and would like to be considered for future opportunities, 
                    we'd love to hear from you.
                  </p>
                  <a
                    href="mailto:harsh@myoib.com"
                    className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl hover:bg-accent/10 transition-colors group"
                  >
                    <EnvelopeSimple size={20} weight="light" />
                    Send us your resume
                    <ArrowRight size={16} weight="light" className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                What We Value
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our team and shape our culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} weight="light" className="text-primary" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                Why Work With Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in taking care of our team so they can focus on doing their best work
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 glass rounded-xl"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                  Our Culture
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    At One in a Billion, we're more than just colleagues — we're a community of innovators, 
                    dreamers, and builders who believe in the power of rare ideas.
                  </p>
                  <p>
                    We foster an environment where creativity thrives, where every voice is heard, and where 
                    the best ideas win regardless of where they come from. We celebrate both successes and 
                    failures as learning opportunities.
                  </p>
                  <p>
                    Our team is distributed across different time zones, but we're united by our shared 
                    mission to democratize innovation and help entrepreneurs turn their visions into reality.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="glass rounded-3xl p-12">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                  Ready to Join Our Journey?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Even though we're not hiring right now, we'd love to connect with passionate individuals 
                  who share our vision. Send us your resume and we'll reach out when opportunities arise.
                </p>
                <a
                  href="mailto:harsh@myoib.com"
                  className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl hover:bg-accent/10 transition-colors group text-lg"
                >
                  <EnvelopeSimple size={24} weight="light" />
                  Get in Touch
                  <ArrowRight size={20} weight="light" className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;
