import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import PromoteHero from '../../components/promote/PromoteHero';
import PromoteProcess from '../../components/promote/PromoteProcess';
import PromoteIntro from '../../components/promote/PromoteIntro';

const PromotePage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main>
                <PromoteHero />
                <PromoteIntro />
                <PromoteProcess />
            </main>
            <Footer />
        </div>
    );
};

export default PromotePage;
