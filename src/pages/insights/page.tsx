
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import InsightsHero from './components/InsightsHero';
import InsightsStats from './components/InsightsStats';
import EntrepreneurJourneys from './components/EntrepreneurJourneys';
import ClientSuccessStories from './components/ClientSuccessStories';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <InsightsHero />
        <InsightsStats />
        <EntrepreneurJourneys />
        <ClientSuccessStories />
      </main>
      <Footer />
    </div>
  );
}
