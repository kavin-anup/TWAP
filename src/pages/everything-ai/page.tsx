// import React from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

// Components will be imported here as they are created
import AIHero from '../../components/everything-ai/AIHero';
import AITools from '../../components/everything-ai/AITools';
import AIDirectories from '../../components/everything-ai/AIDirectories';
import AIExperts from '../../components/everything-ai/AIExperts';
import AIAction from '../../components/everything-ai/AIAction';
import AIInsights from '../../components/everything-ai/AIInsights';
import AICTA from '../../components/everything-ai/AICTA';

const EverythingAIPage = () => {
    return (
        <div className="min-h-screen bg-white text-brand-dark font-sans selection:bg-brand-lime">
            <Header />

            <main>
                <AIHero />

                <AITools />
                <AIDirectories />
                <AIExperts />
                <AIAction />
                <AIInsights />
                <AICTA />
            </main>

            <Footer />
        </div>
    );
};

export default EverythingAIPage;
