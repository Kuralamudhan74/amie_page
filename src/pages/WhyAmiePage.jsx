import PageHero from '../components/common/PageHero';
import TechnologySection from '../sections/why-amie/TechnologySection';
import ComparisonSection from '../sections/why-amie/ComparisonSection';
import SustainabilitySection from '../sections/why-amie/SustainabilitySection';
import UseCasesSection from '../sections/why-amie/UseCasesSection';
import CTASection from '../components/common/CTASection';

const WhyAmiePage = () => {
  return (
    <>
      <PageHero
        title="Why Choose AMIE?"
        subtitle="Discover our revolutionary leak-proof technology, sustainable approach, and how AMIE products are designed to support you through every moment of life."
        badge="Innovation + Sustainability"
      />
      <TechnologySection />
      <ComparisonSection />
      <SustainabilitySection />
      <UseCasesSection />
      <CTASection
        title="Ready to Make the Switch?"
        subtitle="Join thousands who trust AMIE for superior protection and sustainability."
        buttonText="Shop Now"
        buttonLink="/products"
        theme="dark"
      />
    </>
  );
};

export default WhyAmiePage;
