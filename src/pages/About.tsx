import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Brain, Shield, Users, Target } from "phosphor-react";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO and Breadcrumbs
  useSEO({
    title: "About Us | One In a Billion (OIB) - Rare Meets Real",
    description: "Learn about One In a Billion (OIB). Empowering businesses with cutting-edge AI solutions and strategic consulting. Where rare innovation meets real results.",
    canonical: "https://myoib.com/about",
    ogTitle: "About Us | One In a Billion (OIB)",
    ogDescription: "Learn about One In a Billion (OIB). Empowering businesses with cutting-edge AI solutions and strategic consulting.",
    ogImage: "https://myoib.com/images/White_Logo.png",
    breadcrumbs: [
      { name: "Home", url: "https://myoib.com/" },
      { name: "About", url: "https://myoib.com/about" }
    ]
  });

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to stay ahead of market trends and provide superior trading performance."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your trust is paramount. We implement the highest security standards to protect your assets and data."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Advanced trading technology should be available to everyone, not just institutional investors."
    },
    {
      icon: Target,
      title: "Results",
      description: "We're committed to delivering consistent, measurable results that help our users achieve their financial goals."
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="pt-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <Breadcrumb items={[
              { name: "About", url: "/about" }
            ]} />
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                About <span className="text-[#34A853]">One In a</span> Billion
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge AI solutions and strategic consulting. Where rare innovation meets real results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                Founded in 2025 by a group of four visionary founders, One in a Billion (OIB) began as a simple idea shared among friends and family — to help bold thinkers turn their rare ideas into real, successful ventures. With backgrounds spanning technology, design, business strategy, and AI research, our founders saw a growing gap between innovative ideas and the resources needed to bring them to life.
                </p>
                <p>
                What started as late-night discussions and informal consultations soon evolved into a mission-driven company. The team realized that countless entrepreneurs and dreamers lacked the technical guidance, strategic direction, and reliable support to transform their concepts into scalable products. That realization gave birth to One in a Billion — a platform built to bridge that gap and make innovation accessible to everyone.
                </p>
                <p>
                Today, OIB stands as a consultation firm and startup incubator empowering founders worldwide to build and deploy their own SaaS businesses — from concept to code to customer. With an AI-powered consultation system at its core, we simplify the complex journey of building a business by offering personalized strategies, intelligent cost projections, and end-to-end execution support.
                </p>
                <p>
                <span className="font-bold">At One in a Billion,</span> we believe every groundbreaking idea deserves a chance to become real — because sometimes, one rare idea truly can change the world.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
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
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
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

        {/* Team Section */}
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
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experts behind One In a Billion's revolutionary tailored solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Harsh Malik",
                  role: "CEO & Founder",
                  background: "Customer Centric Leader with 3+ years of experience in the fintech industry and providing cutting-edge AI solutions to businesses."
                },
                {
                  name: "Balraj Rathi",
                  role: "CTO & Co-Founder",
                  background: "Ex-Morgan Stanley and Ex-EY Software Engineer specializing in AI & machine learning applications for financial markets."
                },
              
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-20 h-20 glass rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-light text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-light tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.background}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;