import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { CalendarBlank, Clock, ArrowRight } from "phosphor-react";

const Blog = () => {
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Turning Rare Ideas into Reality",
      excerpt: "Discover how One In a Billion empowers founders with AI consulting and full-cycle SaaS solutions — bridging the gap between innovation and execution",
      date: "2025-10-23",
      readTime: "5 min read",
      category: "OIB Blog",
      featured: true
    },
    {
      id: 2,
      title: "Turning Rare Ideas into Reality",
      excerpt: "Discover how One In a Billion empowers founders with AI consulting and full-cycle SaaS solutions — bridging the gap between innovation and execution",
      date: "2025-10-23",
      readTime: "5 min read",
      category: "OIB Blog"
    },
    {
      id: 3,
      title: "Understanding Market Volatility and AI Adaptation",
      excerpt: "Discover how our AI algorithms adapt to market volatility and maintain consistent performance across different market conditions.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Market Analysis"
    },
    {
      id: 4,
      title: "Getting Started with Automated Crypto Trading",
      excerpt: "A comprehensive beginner's guide to automated cryptocurrency trading and how to maximize your investment potential.",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Beginner's Guide"
    }
  ];

  const categories = ["All", "AI Technology", "Trading Strategies", "Market Analysis", "Beginner's Guide"];

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
                One In a Billion <span className="text-[#34A853]">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Insights, strategies, and the latest developments in AI-powered cryptocurrency trading
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="glass rounded-2xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        Featured
                      </span>
                      <span className="px-3 py-1 glass rounded-full text-sm">
                        {blogPosts[0].category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                      {blogPosts[0].title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <CalendarBlank size={16} weight="light" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} weight="light" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate('/blog-post')}
                      className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} weight="light" />
                    </button>
                  </div>
                  
                  <div className="glass rounded-xl p-4">
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <img 
                        src="/images/Blog IMG.png" 
                        alt="Featured Article" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* All Posts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-light tracking-tight mb-8">Latest Articles</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => navigate('/blog-post')}
                  className="glass rounded-2xl p-6 hover:bg-accent/5 transition-colors group cursor-pointer"
                >
                  <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src="/images/Blog IMG.png" 
                      alt="Article" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <span className="px-3 py-1 glass rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-light tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <CalendarBlank size={12} weight="light" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} weight="light" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight size={16} weight="light" className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <div className="glass rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-light tracking-tight mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how rare ideas become real — insights, stories, and strategies from the One in a Billion ecosystem.
                </p>
                <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 glass rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                  <button className="neuma-btn px-6 py-3 rounded-xl text-primary-foreground hover:shadow-neuma-glow transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;