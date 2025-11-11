import ReviewsHero from './components/ReviewsHero';
import UserLeaderboard from './components/UserLeaderboard';
import ExpertLeaderboard from './components/ExpertLeaderboard';
import EditorsPickSection from './components/EditorsPickSection';
import ReviewStats from './components/ReviewStats';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ReviewsHero />
      <ReviewStats />
      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <UserLeaderboard />
        <ExpertLeaderboard />
      </div>
      <EditorsPickSection />
      <Footer />
    </div>
  );
}