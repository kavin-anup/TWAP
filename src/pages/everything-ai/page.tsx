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
        <div className="min-h-screen bg-[#f7f5ef] text-brand-dark font-sans selection:bg-brand-lime selection:text-black overflow-x-hidden">
            <Header />

            {/* Global Background Decorations - Light Theme */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* Decorative Glowing Blobs - Light Version */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-30"></div>
                
                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-burgundy/5 rounded-full blur-[180px] opacity-10"></div>
            </div>

            <main className="relative z-10">
                <AIHero />

                <div className="space-y-0">
                    <AITools />
                    <AIDirectories />
                    <AIExperts />
                    <AIAction />
                    <AIInsights />
                    <AICTA />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default EverythingAIPage;
