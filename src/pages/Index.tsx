import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import TechStack from '@/components/TechStack';
import DeploymentProcess from '@/components/DeploymentProcess';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIChatbot from '@/components/AIChatbot';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <TechStack />
        <DeploymentProcess />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
      <ThemeToggle />
    </div>
  );
};

export default Index;
