import CTA from '@/components/CTA/CTA';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';

const Homepage = () => {
  return (
    <>
      <Hero />
      <CTA />
      <Gallery />
      <Stats />
      <FAQ />
    </>
  );
};

export default Homepage;
