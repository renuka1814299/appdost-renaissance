import { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does AppDost provide?",
      answer: "We provide end-to-end app development services including mobile apps (iOS & Android), web applications, AI integration, blockchain solutions, MVP development, and cloud deployment. Our team handles everything from design to deployment and maintenance."
    },
    {
      question: "How long does it take to develop an app?",
      answer: "Development time varies based on complexity. A simple MVP takes 4-6 weeks, a standard app takes 8-12 weeks, and complex enterprise solutions take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes: 1) Discovery & Planning, 2) UI/UX Design, 3) Development & Testing, 4) Deployment, and 5) Maintenance & Support. We follow agile methodology with regular updates and client feedback at every stage."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes! We offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. Our support packages are flexible and can be customized to your needs."
    },
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React Native, Flutter for mobile apps, React.js, Next.js for web applications, Node.js, Python for backend, AWS, Google Cloud for infrastructure, and various AI/ML frameworks for intelligent features."
    },
    {
      question: "How much does it cost to build an app?",
      answer: "Costs vary based on features, complexity, and platform. Basic apps start from ₹3-5 lakhs, mid-range apps from ₹8-15 lakhs, and enterprise solutions from ₹20 lakhs+. We provide transparent pricing after understanding your requirements."
    },
    {
      question: "Can you help with app marketing and ASO?",
      answer: "Absolutely! We offer App Store Optimization (ASO), digital marketing, social media campaigns, and growth strategies to help your app reach the right audience and achieve your business goals."
    },
    {
      question: "Do you sign NDAs for project confidentiality?",
      answer: "Yes, we take confidentiality seriously. We're happy to sign NDAs before discussing your project details. Your intellectual property and business ideas are completely protected."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center glass p-8 rounded-2xl glow-primary">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-transform font-semibold"
          >
            Contact Us
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
