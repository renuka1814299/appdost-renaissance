import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStartup India",
      location: "Mumbai, Maharashtra",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      rating: 5,
      text: "AppDost transformed our idea into a stunning mobile app in just 6 weeks. Their AI integration was seamless and the team's expertise is unmatched. Highly recommended!"
    },
    {
      name: "Priya Sharma",
      role: "Founder, HealthTech Solutions",
      location: "Bangalore, Karnataka",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      rating: 5,
      text: "Working with AppDost was a game-changer for our healthcare platform. Their attention to detail and technical expertise helped us scale to 50,000+ users in just 3 months!"
    },
    {
      name: "Amit Patel",
      role: "CTO, FinanceApp Pro",
      location: "Ahmedabad, Gujarat",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
      rating: 5,
      text: "The blockchain integration AppDost delivered exceeded our expectations. Their team is professional, responsive, and truly understands cutting-edge technology."
    },
    {
      name: "Sneha Reddy",
      role: "Product Manager, EduTech India",
      location: "Hyderabad, Telangana",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
      rating: 5,
      text: "AppDost built our e-learning platform with amazing features. The deployment was smooth, and their support team is always available. Best decision we made!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 relative overflow-hidden particle-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Client Success</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about their experience working with us
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass p-8 md:p-12 rounded-3xl glow-primary animate-scale-in">
            <Quote className="w-12 h-12 text-primary mb-6 opacity-50" />
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              "{testimonials[activeIndex].text}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full glass p-1 glow-primary"
                />
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[activeIndex].role}</div>
                  <div className="text-sm text-primary">{testimonials[activeIndex].location}</div>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-primary w-8 glow-primary' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Happy Clients", value: "500+", icon: "👥" },
            { label: "Projects Delivered", value: "750+", icon: "🚀" },
            { label: "5-Star Reviews", value: "450+", icon: "⭐" },
            { label: "Countries Served", value: "15+", icon: "🌍" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform glow-secondary"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
