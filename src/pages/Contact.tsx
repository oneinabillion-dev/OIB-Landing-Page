import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { NeumaButton } from "@/components/ui/neuma-button";
import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";
import { useSEO } from "@/hooks/useSEO";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO and Breadcrumbs
  useSEO({
    title: "Contact Us | One In a Billion (OIB) - Rare Meets Real",
    description: "Get in touch with One In a Billion. Contact us for AI consulting, startup incubation, and business transformation services.",
    canonical: "https://myoib.com/contact",
    ogTitle: "Contact Us | One In a Billion (OIB)",
    ogDescription: "Get in touch with One In a Billion. Contact us for AI consulting, startup incubation, and business transformation services.",
    ogImage: "https://myoib.com/favicons/OIB-LOGO.png",
    breadcrumbs: [
      { name: "Home", url: "https://myoib.com/" },
      { name: "Contact", url: "https://myoib.com/contact" }
    ]
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: EnvelopeSimple,
      title: "Email",
      content: "contact@myoib.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 97736 36382",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "DLF Phase 3, Gurugram, INDIA",
      description: "Come say hello at our HQ"
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
              { name: "Contact", url: "/contact" }
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
                Get in <span className="text-[#34A853]">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Have a question about One In a Billion? Let's connect you with one of our consultants
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-2xl font-light tracking-tight mb-6">
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="pricing">Pricing Questions</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 glass rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <NeumaButton type="submit" className="w-full">
                    Send Message
                  </NeumaButton>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-light tracking-tight mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Choose how you'd like to reach us. We're here to help with 
                    any questions about our AI trading platform.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass rounded-xl p-6 flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} weight="light" className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{info.title}</h3>
                        <p className="text-primary mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* FAQ Link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find quick answers to common questions about OIB
                  </p>
                  <a 
                    href="/#faq" 
                    className="text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                  >
                    View FAQ →
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;