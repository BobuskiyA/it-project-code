import { AboutUs } from './AboutUs/AboutUs';
import { Hero } from './Hero';
import { ServicesPreview } from './ServicesPreview/ServicesPreview';
import { WhyUs } from './WhyUs';

import { motion } from 'framer-motion';

export const HomePage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="home-page"
  >
    <Hero />
  
    <WhyUs />

    <AboutUs />

    <ServicesPreview />
  </motion.div>
);