import React from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import AgenciesHero from '../../components/agencies/AgenciesHero';
import AgenciesHallOfFame from '../../components/agencies/AgenciesHallOfFame';
import AgenciesStats from '../../components/agencies/AgenciesStats';
import AgenciesInsights from '../../components/agencies/AgenciesInsights';
import AgenciesContact from '../../components/agencies/AgenciesContact';
import AgenciesGrid from '../../components/agencies/AgenciesGrid';
import AgenciesPartnerOfMonth from '../../components/agencies/AgenciesPartnerOfMonth';

export default function AgenciesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <AgenciesHero />
                <AgenciesGrid />
                <AgenciesHallOfFame />
                <AgenciesPartnerOfMonth />
                <AgenciesStats />
                <AgenciesInsights />
                <AgenciesContact />
            </main>
            <Footer />
        </div>
    );
}
