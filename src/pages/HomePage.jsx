import Hero from '../sections/Hero';
import CategorySection from '../sections/home/CategorySection';
import WhyAmiePreview from '../sections/home/WhyAmiePreview';
import FeaturedProducts from '../sections/home/FeaturedProducts';
import HowItWorks from '../sections/home/HowItWorks';
import TestimonialsSection from '../sections/home/TestimonialsSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <WhyAmiePreview />
      <FeaturedProducts />
      <HowItWorks />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
