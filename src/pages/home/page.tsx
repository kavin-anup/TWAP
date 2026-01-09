import Header from '../../components/feature/Header';
import HeroSection from '../../components/feature/HeroSection';
import FeaturedApps from '../../components/feature/FeaturedApps';
import RatingsLeaderboard from '../../components/feature/RatingsLeaderboard';
import TopAgency from '../../components/feature/TopAgency';
import Footer from '../../components/feature/Footer';
import ExpertVerdict from '../../components/feature/ExpertVerdict';
import AIAutomationServices from '../../components/feature/AIAutomationServices';
import NewsSection from '../../components/feature/NewsSection';
import FounderStories from '../../components/feature/FounderStories';
import MostLovedApps from '../../components/feature/MostLovedApps';
import TestimonialsSection from '../../components/feature/TestimonialsSection';

import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function HomePage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeaturedApps />
        <RatingsLeaderboard />
        <TopAgency />
        <ExpertVerdict />
        <AIAutomationServices />
        <MostLovedApps />
        <FounderStories />
        <NewsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
