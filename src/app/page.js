// app/page.jsx
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import FeatureCards from '../components/FeatureCards';
import CtaSection from '../components/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <BenefitsSection />
      <CtaSection />
    </>
  );
}
