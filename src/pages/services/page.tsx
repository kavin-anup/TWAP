import React from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ServicesHero from './components/ServicesHero';
import AppPromotionSection from './components/AppPromotionSection';
import AIAutomationSection from './components/AIAutomationSection';
import ServicesBenefits from './components/ServicesBenefits';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesBenefits />
      <AppPromotionSection />
      <AIAutomationSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
