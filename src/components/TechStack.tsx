import { Code2, Database, Cloud, Cpu, Layers, Sparkles } from 'lucide-react';

const techCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    color: 'primary'
  },
  {
    icon: Database,
    title: 'Backend',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    color: 'secondary'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    color: 'accent'
  },
  {
    icon: Cpu,
    title: 'AI & ML',
    technologies: ['ChatGPT', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain'],
    color: 'primary'
  },
  {
    icon: Layers,
    title: 'Mobile',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
    color: 'secondary'
  }
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Powered By
            <br />
            <span className="gradient-text">Cutting-Edge Tech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We use the latest and most powerful technologies to build
            scalable, secure, and lightning-fast applications.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-elevated transition-all duration-500 group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${category.color} to-${category.color}-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow-${category.color}`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              {/* Tech List */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full glass text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all border border-transparent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass rounded-3xl p-8 md:p-12 mt-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Code Quality</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">3x</div>
              <div className="text-sm text-muted-foreground">Faster Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
