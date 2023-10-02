import { ConsultationHead } from './ConsultationHead/ConsultationHead';
import { OurAchievement } from './OurAchievement/OurAchievement';
import { OurPriorites } from './OurPriorities/OurPriorities';

import { motion } from 'framer-motion';

export const ConsultationPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="consultation-page"
  >
    <ConsultationHead />

    <OurAchievement />

    <OurPriorites />
  </motion.div>
);
