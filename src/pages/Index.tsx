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
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BackToTop from '@/components/BackToTop';

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
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
      <BackToTop />
    </div>
  );
};

export default Index;
