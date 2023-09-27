import './AboutUs.scss';
import { Button } from '../../../components/Button';

const BENEFITS_LIST = ['якісний результат', 'швидкість'];
const RUGS = ['#3548fe', '#ff7715', '#14140f'];

export const AboutUs = () => (
  <div className="container">
    <div className="about-us">
      <div className="about-us__rugs">
        {RUGS.map(currentColor => (
          <span 
            key={currentColor} 
            className="about-us__rugs--item"
            style={{
              backgroundColor: currentColor,
            }}
          />    
        ))}
      </div>
      <h3 className="blue-text about-us--title">
        IT DEVELOP - ком’юніті, 
        в якому працюють професіонали
        і ми допоможемо зробити вам сайт!
      </h3>

      <div className="about-us__content">
        <div className="about-us__left">
          <p className="about-us--paragraph">
            Наша команда пропонує консультацію 
            для створення продукту найвищої якості.
          </p>

          <div className="about-us--button">
            <Button 
              content={'Зв\'яжіться зі мною'}
              color={'blue'}
            />
          </div>
        </div>

        <ul className="about-us__benefits-list">
          {BENEFITS_LIST.map(currentBenefit => (
            <li 
              key={currentBenefit}
              className="about-us__benefits-list--item"
            >
              {currentBenefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
