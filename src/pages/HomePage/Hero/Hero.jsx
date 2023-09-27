import { Lines } from '../../../components/Lines/Lines';
import { RoundLink } from '../../../components/RoundLink/RoundLink';
import HeroImage from '../../../images/hero-page.png';

import './Hero.scss';

export const Hero = () => (
  <div className="container">
    <div className="hero">
      <div className="hero__main-image">
        <img
          src={HeroImage}
          alt="hero"
          className="hero__main-image--item"
        />
      </div>

      <div className="hero__content">
        <div className="hero__titles">
          <h1 className="hero__titles--title">
            IT сфера
          </h1>

          <h2 className="hero__titles--subtitle">
            ваш гід в світі технологій 
          </h2>
        </div>
        <div className="hero__main-content">
          <p className="hero__main-content--text">
            Перетворимо ваші ідеї на цифрову реальність з надійною командою розробників
          </p>
          
          <p className="hero__main-content--text">
            Відтворюємо ваші побачання завдяки безкінечних можливостей
          </p>
        </div>

        <div className="hero__link-arrow">
          <RoundLink color={'blue'} />
        </div>
      </div>
        <Lines />
        <div className="hero--first-arrow" />
        <div className="hero--second-arrow" />
    </div>
  </div>
);
