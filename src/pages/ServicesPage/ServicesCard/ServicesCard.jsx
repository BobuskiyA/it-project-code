import { Button } from '../../../components/Button';
import designImage from '../../../images/services/design-card.png';
import developImage from '../../../images/services/develop-card.png'
import analyticsImage from '../../../images/services/analytics-card.png'

import './ServicesCard.scss';

const getPhotoLink = (link_image) => {
  switch(link_image) {
    case 'design':
      return designImage;

    case 'develop':
      return developImage;

    case 'analytics':
      return analyticsImage;

    default:
      break;
  }
};

export const ServicesCard = ({
  id,
  photo_link,
  title,
  content,
}) => (
  <div className="services-card">
    <li 
      key={id}
      className="services-card__item"
      style={{
        background: `url(${getPhotoLink(photo_link)}) center no-repeat`
      }}
    >
      <div className="services-card__item-container">
        <h1 className="services-card__item--title">
          {title}
        </h1>

        <p className="services-card__item--text">
          {content}
        </p>
      </div>

      <div className="services-card--button">
        <Button 
          content={'Детальніше'}
          color={'blue'}  
        />
      </div>
    </li>
  </div>
);
