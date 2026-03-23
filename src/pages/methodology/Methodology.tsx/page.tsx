import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import MethodologyHero from "../../../components/methodology/MethodologyHero";
import MethodologyProcess from "../../../components/methodology/MethodologyProcess";
import MethodologyIntro from "../../../components/methodology/MethodologyIntro";

const MethodologyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <MethodologyHero />
        <MethodologyIntro />
        <MethodologyProcess />
      </main>
      <Footer />
    </div>
  );
};

export default MethodologyPage;
