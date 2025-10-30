import { Smartphone, Globe, Brain, Rocket, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native iOS & Android apps with stunning UI and seamless performance.',
    gradient: 'from-primary to-primary-glow',
    delay: '0s'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Responsive, fast, and beautiful web apps built with modern frameworks.',
    gradient: 'from-secondary to-secondary-glow',
    delay: '0.1s'
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Harness the power of AI with ChatGPT, machine learning, and automation.',
    gradient: 'from-accent to-accent-glow',
    delay: '0.2s'
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Launch your product fast with our rapid MVP development process.',
    gradient: 'from-primary to-secondary',
    delay: '0.3s'
  },
  {
    icon: Shield,
    title: 'Blockchain & Web3',
    description: 'Decentralized apps, smart contracts, and NFT platforms.',
    gradient: 'from-secondary to-accent',
    delay: '0.4s'
  },
  {
    icon: Zap,
    title: 'DevOps & Cloud',
    description: 'Scalable infrastructure with AWS, Azure, and automated deployments.',
    gradient: 'from-accent to-primary',
    delay: '0.5s'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden particle-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Zap className="w-4 h-4 text-accent animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Next-Gen Solutions</span>
            <br />
            For Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver cutting-edge technology solutions
            that transform businesses and delight users.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: service.delay }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow-primary`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-6 h-1 w-0 bg-gradient-primary group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
          <button className="text-primary hover:text-primary-glow transition-colors font-semibold group">
            Let's discuss your custom project
            <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
