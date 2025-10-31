import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import logo from '@/assets/appdost-logo.png';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden particle-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="AppDost" className="h-16 md:h-20 animate-float" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Let's Build</span>
            <br />
            Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass p-8 rounded-3xl glow-primary">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@appdost.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@appdost.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <p className="text-muted-foreground">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Business Hours</div>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="font-semibold mb-4">Quick Response Time</h4>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-primary/20 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-primary h-full w-[95%] animate-pulse"></div>
                  </div>
                  <span className="text-sm text-primary font-semibold">95% within 24hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form className="glass p-8 rounded-3xl space-y-6 glow-secondary">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="glass border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="glass border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="glass border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  className="glass border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Required</label>
                <select className="w-full glass border border-primary/30 rounded-md px-3 py-2 focus:border-primary focus:outline-none">
                  <option>Mobile App Development</option>
                  <option>Web Application</option>
                  <option>AI Integration</option>
                  <option>MVP Development</option>
                  <option>Blockchain Solution</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="glass border-primary/30 focus:border-primary"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary text-white glow-primary hover:scale-105 transition-all"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
