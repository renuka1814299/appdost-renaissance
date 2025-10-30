import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative glass rounded-[3rem] p-12 md:p-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-50" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-primary">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-sm">Limited Slots Available</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto">
              Ready To Build
              <br />
              <span className="gradient-text">Something Amazing?</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's transform your vision into a stunning reality. Join hundreds of 
              satisfied clients who trusted us with their digital transformation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">48h</div>
                <div className="text-sm text-muted-foreground mt-1">Quick Start</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">$0</div>
                <div className="text-sm text-muted-foreground mt-1">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white border-0 glow-primary hover:scale-105 transition-all text-lg px-10 group"
              >
                <Zap className="mr-2 w-5 h-5 animate-pulse-glow" />
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass border-foreground/20 hover:border-primary text-lg px-10"
              >
                Schedule Call
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
