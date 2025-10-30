import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Code2 } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-primary">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-sm text-foreground/90">AI-Powered Development</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build The{' '}
              <span className="gradient-text">Future</span>
              <br />
              Of Apps Today
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-lg">
              Transform your ideas into reality with cutting-edge AI technology, stunning designs, 
              and lightning-fast development. Welcome to the next generation of app creation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99%</div>
                <div className="text-sm text-muted-foreground mt-1">Success</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white border-0 glow-primary hover:scale-105 transition-all text-lg px-8 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass border-primary/30 hover:border-primary text-lg px-8 group"
              >
                <Zap className="mr-2 w-5 h-5 text-accent group-hover:text-accent animate-pulse-glow" />
                View Portfolio
              </Button>
            </div>

            {/* Tech Icons */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="text-sm">React • Next.js • AI • Web3</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Mockup */}
          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl animate-pulse-glow" />
              
              {/* Floating Card */}
              <div className="relative glass rounded-3xl p-8 glow-primary transform hover:scale-105 transition-all duration-500">
                <div className="w-64 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <Code2 className="w-32 h-32 text-primary animate-float" />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -left-4 w-16 h-16 glass rounded-2xl flex items-center justify-center glow-accent animate-float">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 glass rounded-2xl flex items-center justify-center glow-secondary animate-float" style={{ animationDelay: '1s' }}>
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
