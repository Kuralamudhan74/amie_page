import Hero from '../sections/Hero';
import CategorySection from '../sections/home/CategorySection';
import WhyAmiePreview from '../sections/home/WhyAmiePreview';
import FeaturedProducts from '../sections/home/FeaturedProducts';
import HowItWorks from '../sections/home/HowItWorks';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import SustainabilityImpact from '../sections/home/SustainabilityImpact';
import Waitlist from '../sections/Waitlist';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <WhyAmiePreview />
      <FeaturedProducts />
      <HowItWorks />
      <TestimonialsSection />
      <SustainabilityImpact />
      <Waitlist />
    </>
  );
};

export default HomePage;
