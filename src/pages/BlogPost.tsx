import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { CalendarBlank, Clock, ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const BlogPost = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate('/blog')}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={20} weight="light" />
              <span>Back to Blog</span>
            </motion.button>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  Featured
                </span>
                <span className="px-3 py-1 glass rounded-full text-sm">
                  OIB Blog
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
                Turning Rare Ideas into Reality: The Story Behind One In a Billion
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <CalendarBlank size={16} weight="light" />
                  <span>October 23, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} weight="light" />
                  <span>5 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Hero Image */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-12"
            >
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden">
                <img 
                  src="/images/Blog IMG.png" 
                  alt="Article Hero" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Every great venture begins with a spark — and for us, that spark ignited in 2025.
                  What started as a shared dream among four friends soon evolved into a mission-driven company with one goal: help founders turn ideas into intelligent products.
                  With experience across technology, design, AI research, and business strategy, our founding team met countless thinkers — creators with powerful ideas who lacked the right guidance or technical partner to bring them to life.
                  That's when One In a Billion (OIB) was born — an AI consulting and SaaS development company designed to bridge the gap between innovation and execution.
                </p>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mt-12 mb-6">
                  From an Idea to an Intelligent Ecosystem
                </h2>
                <p className="text-lg leading-relaxed">
                  One In a Billion was founded with one purpose: to make startup building smarter, faster, and more accessible.
                  We created an ecosystem where AI meets human intelligence.
                  Our 24/7 AI consultant helps founders refine ideas, estimate timelines, and plan execution — before connecting them with senior experts for personalized strategy sessions.
                </p>
                <p className="text-lg leading-relaxed">
                  Once the foundation is set, we support the full journey:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed ml-4">
                  <li>UI/UX Design that transforms concepts into intuitive interfaces</li>
                  <li>Full-stack Development for scalable, secure products</li>
                  <li>Product Strategy & Marketing to reach early adopters</li>
                  <li>Build Your Team Program to connect founders with world-class developers and designers.</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  Every founder receives what they truly need — AI speed with human precision.
                </p>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mt-12 mb-6">
                  Our Approach: Where Rare Meets Real
                </h2>
                <p className="text-lg leading-relaxed">
                  "Rare Meets Real" isn't just our tagline — it's our philosophy.
                  We celebrate rare ideas — the ones that stand out, question norms, and challenge industries — and we make them real through practical execution and scalable technology.
                </p>
                <p className="text-lg leading-relaxed">
                  That means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed ml-4">
                  <li>AI Consulting for Startups that turns uncertainty into strategy</li>
                  <li>AI-Powered SaaS Development that delivers tangible results</li>
                  <li>End-to-End Execution that reduces cost, time, and risk</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  OIB doesn't just design systems — we design success paths for every founder who dares to innovate.
                </p>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mt-12 mb-6">
                  Plans for Every Stage of Growth
                </h2>
                <p className="text-lg leading-relaxed">
                  We know that every startup journey is different. That's why our pricing plans are built for flexibility:
                </p>
                
                <div className="overflow-x-auto mt-6">
                  <table className="w-full border-collapse border border-border/20 rounded-lg">
                    <thead>
                      <tr className="bg-accent/5">
                        <th className="border border-border/20 px-4 py-3 text-left font-medium text-foreground">Plan</th>
                        <th className="border border-border/20 px-4 py-3 text-left font-medium text-foreground">Ideal For</th>
                        <th className="border border-border/20 px-4 py-3 text-left font-medium text-foreground">Key Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border/20 px-4 py-3 font-medium text-foreground">Starter</td>
                        <td className="border border-border/20 px-4 py-3 text-muted-foreground">Early-stage founders</td>
                        <td className="border border-border/20 px-4 py-3 text-muted-foreground">Quick AI consultation, MVP planning</td>
                      </tr>
                      <tr>
                        <td className="border border-border/20 px-4 py-3 font-medium text-foreground">Professional</td>
                        <td className="border border-border/20 px-4 py-3 text-muted-foreground">Scaling startups</td>
                        <td className="border border-border/20 px-4 py-3 text-muted-foreground">Strategy + Full-stack build, continuous support</td>
                      </tr>
                      <tr>
                        <td className="border border-border/20 px-4 py-3 font-medium text-foreground">Build Your Dream</td>
                        <td className="border border-border/20 px-4 py-3 text-muted-foreground">Established businesses</td>
                        <td className="border border-border/20 px-4 py-3 text-muted-foreground">Advanced product infrastructure, custom team build</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-lg leading-relaxed mt-6">
                  No hidden costs. No lengthy onboarding. Just clarity, collaboration, and continuous support.
                </p>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mt-12 mb-6">
                  Industries We Serve
                </h2>
                <p className="text-lg leading-relaxed">
                  From finance and healthcare to retail, manufacturing, and technology,
                  One In a Billion delivers AI solutions that adapt to diverse needs — customized for each business's unique data and goals.
                </p>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mt-12 mb-6">
                  The Human Side of AI Consulting
                </h2>
                <p className="text-lg leading-relaxed">
                  While technology drives progress, it's people who give it purpose.
                  At One In a Billion, we believe AI should enhance human creativity — not replace it.
                  Our consultants, developers, and designers collaborate with your team to understand the why behind your idea before we build the how.
                </p>
                <p className="text-lg leading-relaxed">
                  This synergy allows us to create products that don't just function efficiently but also connect with real users.
                  From refining ideas to optimizing SaaS products, every project we build carries a balance of data-driven logic and human-centered design.
                  Because true innovation happens when algorithms meet empathy — and that's what defines Rare Meets Real.
                </p>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mt-12 mb-6">
                  Why AI Consulting Matters for Startups
                </h2>
                <p className="text-lg leading-relaxed">
                  In today's fast-moving tech ecosystem, founders can't afford slow experimentation.
                  That's where AI consulting for startups plays a crucial role — helping businesses move from concept to product with precision and speed.
                  At One In a Billion, our AI strategy consulting services combine real-time data analysis with founder insights to identify the best roadmap for growth. Whether you're refining your MVP or planning to build a SaaS solution from scratch, our hybrid AI + human model ensures clarity at every stage of execution.
                </p>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mt-12 mb-6">
                  The Future We're Building
                </h2>
                <p className="text-lg leading-relaxed">
                  The world doesn't need more ideas. It needs execution that scales.
                  At One In a Billion, we're building that future — one startup, one product, and one AI-driven transformation at a time.
                </p>
                <p className="text-lg leading-relaxed font-medium text-foreground">
                  Have an idea? Start your AI-powered journey with One In a Billion
                </p>
                <p className="text-lg leading-relaxed">
                Meta Description: Discover how One In a Billion empowers founders with AI consulting and full-cycle SaaS solutions — bridging the gap between innovation and execution.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
