import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import TechStack from '@/components/TechStack';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIChatbot from '@/components/AIChatbot';

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <TechStack />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
