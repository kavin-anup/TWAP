import { Link, useParams } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import PromoteCategoryHero, { type PromoteCategoryTheme } from '../../components/promote/PromoteCategoryHero';
import PromoteBenefitsSection from '../../components/promote/PromoteBenefitsSection';
import PromoteDistributionChannelsSection from '../../components/promote/PromoteDistributionChannelsSection';
import PromoteHowItWorksSection from '../../components/promote/PromoteHowItWorksSection';
import PromotePricingSection from '../../components/promote/PromotePricingSection';
import PromoteComparisonSection from '../../components/promote/PromoteComparisonSection';
import promoteCategoryContent from './category-content.json';

const categoryThemes = promoteCategoryContent.categoryThemes as Record<string, PromoteCategoryTheme>;
const metrics = promoteCategoryContent.metrics;
const directoryBenefits = promoteCategoryContent.directoryBenefits;
const reviewBenefits = promoteCategoryContent.reviewBenefits;
const benefitSections = promoteCategoryContent.benefitSections as Record<string, {
  accentColor: string;
  eyebrow: string;
  headingHtml: string;
  introText: string;
  firstCardTitle: string;
  firstCardDescription: string;
  secondCardTitle: string;
  secondCardDescription: string;
  previewCard: {
    icon: string;
    iconBg: string;
    iconColor: string;
    name: string;
    meta: string;
    badge: string;
    badgeColor: string;
  };
}>;
const distributionSections = promoteCategoryContent.distributionSections as Record<string, {
  accentColor: string;
  eyebrow: string;
  headingHtml: string;
  introText: string;
  cards: Array<{
    number: string;
    icon: string;
    title: string;
    description: string;
    tags: string[];
    metricLabel: string;
    metricValue: string;
    featured?: boolean;
  }>;
}>;
const howItWorksSections = promoteCategoryContent.howItWorksSections as Record<string, {
  accentColor: string;
  eyebrow: string;
  headingHtml: string;
  introText: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}>;
const pricingSections = promoteCategoryContent.pricingSections as Record<string, {
  accentColor: string;
  eyebrow: string;
  headingHtml: string;
  introText: string;
  plans: Array<{
    name: string;
    subtitle: string;
    price: string;
    features: string[];
    ctaText: string;
    highlighted?: boolean;
    badgeText?: string;
  }>;
}>;
const comparisonSections = promoteCategoryContent.comparisonSections as Record<string, {
  accentColor: string;
  eyebrow: string;
  headingHtml: string;
  introText: string;
  columns: {
    feature: string;
    twap: string;
    directory: string;
    editorial: string;
    social: string;
    ceo: string;
  };
  rows: Array<{
    feature: string;
    twap: string;
    directory: string;
    editorial: string;
    social: string;
    ceo: string;
  }>;
}>;

export default function PromoteCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const theme = (category && categoryThemes[category]) || categoryThemes['web-mobile-apps'];
  const activeSection = theme.key ? benefitSections[theme.key] : undefined;
  const activeDistributionSection = theme.key ? distributionSections[theme.key] : undefined;
  const activeHowItWorksSection = theme.key ? howItWorksSections[theme.key] : undefined;
  const activePricingSection = theme.key ? pricingSections[theme.key] : undefined;
  const activeComparisonSection = theme.key ? comparisonSections[theme.key] : undefined;

  return (
    <div className="min-h-screen bg-[#050608] text-white overflow-x-hidden">
      <Header />
      
      <div
        className="fixed top-[5.2rem] sm:top-[5.5rem] w-full py-2.5 px-4 text-center text-[11px] sm:text-xs font-semibold tracking-wide z-20"
        style={{ backgroundColor: theme.topBarBg }}
      >
        <span className="text-white/80 mr-2">You&apos;re viewing:</span>
        <span className="text-white">{theme.viewingLabel}</span>
        <Link to="/promote" className="ml-4 underline decoration-white/40 hover:decoration-white text-white/90">
          Switch Category
        </Link>
      </div>
      <PromoteCategoryHero theme={theme} metrics={metrics} />
      {activeSection && (
        <PromoteBenefitsSection
          accentColor={activeSection.accentColor}
          eyebrow={activeSection.eyebrow}
          headingHtml={activeSection.headingHtml}
          introText={activeSection.introText}
          firstCardTitle={activeSection.firstCardTitle}
          firstCardDescription={activeSection.firstCardDescription}
          secondCardTitle={activeSection.secondCardTitle}
          secondCardDescription={activeSection.secondCardDescription}
          previewCard={activeSection.previewCard}
          directoryBenefits={directoryBenefits}
          reviewBenefits={reviewBenefits}
        />
      )}
      {activeDistributionSection && (
        <PromoteDistributionChannelsSection
          accentColor={activeDistributionSection.accentColor}
          eyebrow={activeDistributionSection.eyebrow}
          headingHtml={activeDistributionSection.headingHtml}
          introText={activeDistributionSection.introText}
          cards={activeDistributionSection.cards}
        />
      )}
      {activeHowItWorksSection && (
        <PromoteHowItWorksSection
          accentColor={activeHowItWorksSection.accentColor}
          eyebrow={activeHowItWorksSection.eyebrow}
          headingHtml={activeHowItWorksSection.headingHtml}
          introText={activeHowItWorksSection.introText}
          steps={activeHowItWorksSection.steps}
        />
      )}
      {activePricingSection && (
        <PromotePricingSection
          accentColor={activePricingSection.accentColor}
          eyebrow={activePricingSection.eyebrow}
          headingHtml={activePricingSection.headingHtml}
          introText={activePricingSection.introText}
          plans={activePricingSection.plans}
        />
      )}
      {activeComparisonSection && (
        <PromoteComparisonSection
          accentColor={activeComparisonSection.accentColor}
          eyebrow={activeComparisonSection.eyebrow}
          headingHtml={activeComparisonSection.headingHtml}
          introText={activeComparisonSection.introText}
          columns={activeComparisonSection.columns}
          rows={activeComparisonSection.rows}
        />
      )}

      <Footer />
    </div>
  );
}
