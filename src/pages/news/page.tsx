
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import NewsHero from './components/NewsHero';
import FeaturedNews from './components/FeaturedNews';
import NewsGrid from './components/NewsGrid';
import NewsletterSection from './components/NewsletterSection';
import TrendingTopics from './components/TrendingTopics';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <NewsHero />
        <FeaturedNews />
        <TrendingTopics />
        <NewsGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}