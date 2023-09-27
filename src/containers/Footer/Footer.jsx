import { AboutUsLinks } from '../../components/AboutUsLinks';
import { Button } from '../../components/Button';
import './Footer.scss';

const DOCUMENTS = ['Публiчна оферта', 'Полiтика конфiденційності'];

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <h1 className="footer--title">
          Кінець сторінки. Початок вашого успіху!
        </h1>

        <h4 className="footer--text">
          Поділіться своїми даними та очікуйте дзвінка протягом 24 годин.
          Ми відповімо на всі запитання та надамо ефективне рішення 
          щодо ваших потреб.
        </h4>
      </div>

      <div className="footer__bottom">
        <div className="footer--button">
          <Button 
            content={'Зв`яжіться зі мною'}
            color={'blue'}
          />
        </div>

        <div className="footer__links">
          <div className="footer__about-us">
            <p className="blue-text footer__links--link-title">
              Про нас
            </p>

            <ul className="footer__links__list">
              {Object.entries(AboutUsLinks).map(([label, containerName]) => (
                <li key={containerName}>
                  <a href={`#${containerName}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__docs">
          <p className="blue-text footer__links--link-title">
              Документи
            </p>

              <ul className="footer__links__list">
                {DOCUMENTS.map(currentLink => (
                  <li key={currentLink}>
                    <a href={`/`}>
                      {currentLink}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
