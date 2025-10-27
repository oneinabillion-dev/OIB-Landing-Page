import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "An efficient and user-friendly platform for crypto trading",
      author: "Jane Aron",
      result: "+245% Portfolio Growth",
      role: "Crypto Investor"
    },
    {
      text: "Lunexa's AI assistant helped me maximize my profile",
      author: "John Doe",
      result: "+189% Returns",
      role: "Day Trader"
    },
    {
      text: "A game-changer in the world of crypto trading",
      author: "Emily Smith",
      result: "+312% Profit",
      role: "Portfolio Manager"
    },
    {
      text: "The automation features saved me hours of analysis",
      author: "Michael Chen",
      result: "+156% Growth",
      role: "Algorithmic Trader"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users have achieved with Lunexa
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 md:p-12 text-center"
          >
            <p className="text-xl md:text-2xl text-foreground mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <div className="text-2xl font-medium bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {testimonials[currentIndex].result}
                </div>
                <div className="text-foreground font-medium">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <CaretLeft size={20} weight="light" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <CaretRight size={20} weight="light" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;