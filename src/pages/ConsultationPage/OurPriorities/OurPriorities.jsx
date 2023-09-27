import { Button } from '../../../components/Button';
import manImage from '../../../images/our-priorites.png';

import './OurPriorites.scss';

export const OurPriorites = () => (
  <div className="our-priorites">
    <div className="our-priorites__content container">
      <h1 className="our-priorites--title">
        Ми будемо поруч, коли вам буде потрібна підтримка
      </h1>

      <div className="our-priorites__bottom">
        <h1 
          className="
          our-priorites--title
          our-priorites__bottom--title"
        >
          А допомагати це наш пріоритет
        </h1>

        <div className="our-priorites--button">
          <Button
            content={'Зв\'яжіться зі мною'}
            color={'white'}
          />
        </div>

        <img
          src={manImage}
          alt="man"
          className="our-priorites__bottom--image"
        />
      </div>
    </div>
  </div>
);
