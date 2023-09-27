import { ServicesCard } from '../../ServicesPage/ServicesCard/ServicesCard';
import ServicesCardContent from '../../ServicesPage/ServicesCardContent/ServicesCardContent.json';
import { ServicesPageHead } from '../../ServicesPage/ServicesPageHead/ServicesPageHead';

import './ServicesPreview.scss';

export const ServicesPreview = () => {
  const previevCard = ServicesCardContent[0];

  return (
    <div className="services-preview">
      <ServicesPageHead />
      <div className="services-preview__content">
        <h3 className="services-preview--title container">
          Ми робимо
        </h3>

          <ServicesCard
            id={previevCard.id}
            photo_link={previevCard.photo_link}
            title={previevCard.title}
            content={previevCard.content}
          />
      </div>
    </div>
  );
};
