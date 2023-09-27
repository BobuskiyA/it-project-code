import { ConsultationHead } from './ConsultationHead/ConsultationHead';
import { OurAchievement } from './OurAchievement/OurAchievement';
import { OurPriorites } from './OurPriorities/OurPriorities';

export const ConsultationPage = () => (
  <div className="consultation-page">
    <ConsultationHead />

    <OurAchievement />

    <OurPriorites />
  </div>
);
