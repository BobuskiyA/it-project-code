import { AboutUs } from './AboutUs/AboutUs';
import { Hero } from './Hero';
import { ServicesPreview } from './ServicesPreview/ServicesPreview';
import { WhyUs } from './WhyUs';

export const HomePage = () => (
  <div className="home-page">
    <Hero />
  
    <WhyUs />

    <AboutUs />

    <ServicesPreview />
  </div>
);