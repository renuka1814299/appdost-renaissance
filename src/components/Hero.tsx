import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Eye, Bell, Download, Gift, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import tech1 from '@/assets/tech-1.jpg';
import tech2 from '@/assets/tech-2.jpg';
import tech3 from '@/assets/tech-3.jpg';
import tech4 from '@/assets/tech-4.jpg';
import tech5 from '@/assets/tech-5.jpg';

const techImages = [tech1, tech2, tech3, tech4, tech5];

const recentQuotes = [
  { name: 'Rajesh Kumar', city: 'Mumbai', time: '2m ago' },
  { name: 'Priya Sharma', city: 'Bangalore', time: '5m ago' },
  { name: 'Amit Patel', city: 'Delhi', time: '8m ago' },
  { name: 'Sneha Reddy', city: 'Hyderabad', time: '12m ago' },
  { name: 'Vikram Singh', city: 'Pune', time: '15m ago' },
];

const Hero = () => {
  const [liveViewers, setLiveViewers] = useState(142);
  const [quoteRequests, setQuoteRequests] = useState(38);
  const [downloads, setDownloads] = useState(256);
  const [showDiscount, setShowDiscount] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showQuotePopup, setShowQuotePopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setQuoteRequests(prev => prev + 1);
        setCurrentQuoteIndex(prev => (prev + 1) % recentQuotes.length);
        setShowQuotePopup(true);
        setTimeout(() => setShowQuotePopup(false), 4000);
      }
    }, 3000);

    const discountTimer = setTimeout(() => setShowDiscount(true), 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(discountTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 animate-pulse-glow" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />

      {/* Live Stats Indicators */}
      <div className="fixed top-24 right-4 z-50 space-y-3 animate-slide-in-right">
        {/* Live Viewers */}
        <div className="glass px-4 py-3 rounded-2xl flex items-center gap-3 glow-accent animate-float">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Eye className="w-5 h-5 text-accent animate-pulse-glow" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Live Viewers</div>
            <div className="text-lg font-bold gradient-text">{liveViewers}</div>
          </div>
        </div>

        {/* Quote Requests */}
        <div className="glass px-4 py-3 rounded-2xl flex items-center gap-3 glow-secondary animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
            <Bell className="w-5 h-5 text-secondary animate-pulse-glow" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Quote Requests</div>
            <div className="text-lg font-bold text-secondary">{quoteRequests}</div>
          </div>
        </div>

        {/* Downloads */}
        <div className="glass px-4 py-3 rounded-2xl flex items-center gap-3 glow-primary animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Download className="w-5 h-5 text-primary animate-pulse-glow" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Brochures</div>
            <div className="text-lg font-bold text-primary">{downloads}</div>
          </div>
        </div>
      </div>

      {/* Recent Quote Request Popup */}
      {showQuotePopup && (
        <div className="fixed bottom-8 left-8 z-50 animate-slide-in-left max-w-sm">
          <div className="glass p-4 rounded-2xl glow-secondary border border-secondary/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-foreground truncate">
                  {recentQuotes[currentQuoteIndex].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  from {recentQuotes[currentQuoteIndex].city} requested a quote
                </div>
                <div className="text-xs text-accent mt-1">
                  {recentQuotes[currentQuoteIndex].time}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Special Offer Popup */}
      {showDiscount && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-scale-in">
          <div className="glass p-8 rounded-3xl max-w-md glow-primary border-2 border-primary/50">
            <button 
              onClick={() => setShowDiscount(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center animate-rotate-glow">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Special Offer!</h3>
                <p className="text-sm text-muted-foreground">Limited Time Only</p>
              </div>
            </div>
            <p className="text-lg mb-6">
              Get <span className="text-3xl font-bold text-accent">25% OFF</span> on your first project + Free AI Integration!
            </p>
            <Button className="w-full bg-gradient-primary text-white glow-primary">
              Claim Your Offer Now
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-primary">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-sm text-foreground/90">AI-Powered Development</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Build The{' '}
              <span className="gradient-text animate-pulse-glow">Future</span>
              <br />
              Of Apps Today
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Transform your ideas into reality with cutting-edge AI technology, stunning designs, 
              and lightning-fast development. Welcome to the next generation of app creation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center animate-fade-in">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Clients</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
          </div>

          {/* Right Content - Tech Carousel */}
          <div className="relative animate-scale-in hidden lg:block">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {techImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative glass rounded-3xl overflow-hidden glow-primary group">
                      <img 
                        src={image} 
                        alt={`Technology ${index + 1}`}
                        className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {['AI Neural Networks', 'Blockchain Technology', 'Cloud Computing', 'Mobile AR Apps', 'Quantum Computing'][index]}
                        </h3>
                        <p className="text-white/80">Next-generation technology solutions</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 glass border-primary/50" />
              <CarouselNext className="right-4 glass border-primary/50" />
            </Carousel>
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
