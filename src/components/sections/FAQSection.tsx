import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "phosphor-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes One In a Billion different from other AI consultancies?",
      answer: "One In a Billion combines cutting-edge AI technology with deep business expertise. Our 'Rare Meets Real' philosophy ensures that innovative solutions are grounded in practical business outcomes."
    },
    {
      question: "How long does a typical AI implementation take?",
      answer: "Project timelines vary based on complexity. Simple automation projects can be completed in 4-6 weeks, while comprehensive AI transformations typically take 3-6 months."
    },
    {
      question: "Do you work with small businesses or just enterprises?",
      answer: "We work with businesses of all sizes. Our Starter package is designed specifically for small businesses, while our Enterprise solutions cater to large organizations."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have expertise across 15+ industries including finance, healthcare, retail, manufacturing, and technology. Our solutions are customized to each sector's unique requirements."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, all our packages include ongoing support. Professional and Enterprise clients receive dedicated account management and continuous optimization services."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. Our solutions are designed to integrate seamlessly with existing business systems, ensuring minimal disruption to your current operations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about One In a Billion
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <span className="text-lg font-light tracking-tight">{faq.question}</span>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus size={20} weight="light" className="text-primary" />
                  ) : (
                    <Plus size={20} weight="light" className="text-muted-foreground" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openIndex === index ? "auto" : 0, 
                  opacity: openIndex === index ? 1 : 0 
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { duration: 0.4 }
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;