import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import appMockup from '@/assets/app-mockup.png';

const projects = [
  {
    title: 'FinTech Pro',
    category: 'Financial App',
    description: 'AI-powered investment platform with real-time analytics and blockchain integration.',
    image: appMockup,
    tags: ['React', 'AI', 'Blockchain'],
    gradient: 'from-primary to-secondary'
  },
  {
    title: 'HealthHub AI',
    category: 'Healthcare',
    description: 'Telemedicine platform with AI diagnosis and patient management system.',
    image: appMockup,
    tags: ['Next.js', 'AI', 'WebRTC'],
    gradient: 'from-secondary to-accent'
  },
  {
    title: 'EduLearn',
    category: 'Education',
    description: 'Interactive learning platform with gamification and progress tracking.',
    image: appMockup,
    tags: ['React Native', 'Firebase', 'ML'],
    gradient: 'from-accent to-primary'
  },
  {
    title: 'ShopSmart',
    category: 'E-Commerce',
    description: 'Next-gen shopping experience with AR try-on and AI recommendations.',
    image: appMockup,
    tags: ['Vue.js', 'AR', 'AI'],
    gradient: 'from-primary to-accent'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden particle-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Sparkles className="w-4 h-4 text-accent animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Featured Projects</span>
            <br />
            That Changed The Game
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative applications that have
            transformed businesses and delighted millions of users.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-3xl overflow-hidden hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-sm text-primary mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full glass text-sm border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 glass border-primary/30 hover:border-primary group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:text-primary" />
                    View Live
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 glass border-secondary/30 hover:border-secondary group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:text-secondary" />
                    Source
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-primary text-white border-0 glow-primary hover:scale-105 transition-all px-8"
          >
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
