import PageHero from '../components/common/PageHero';
import MissionSection from '../sections/about/MissionSection';
import StorySection from '../sections/about/StorySection';
import ValuesSection from '../sections/about/ValuesSection';
import MilestonesSection from '../sections/about/MilestonesSection';
import CTASection from '../components/common/CTASection';

const AboutPage = () => {
  return (
    <>
      <PageHero
        title="About AMIE"
        subtitle="We're on a mission to revolutionize leak protection with sustainable, innovative solutions that empower people at every stage of life."
        badge="Our Story"
      />
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <MilestonesSection />
      <CTASection
        title="Ready to Experience the AMIE Difference?"
        subtitle="Join thousands who are making the switch to sustainable, comfortable protection."
        buttonText="Explore Products"
        buttonLink="/products"
        theme="light"
      />
    </>
  );
};

export default AboutPage;
