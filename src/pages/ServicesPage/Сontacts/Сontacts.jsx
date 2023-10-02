import { Button } from '../../../components/Button';
import { Lines } from '../../../components/Lines/Lines';
import tedeshi from '../../../images/contacts.png';

import './Сontacts.scss';

export const Сontacts = () => (
  <div className="container contacts" id="contacts">
    <div className="contacts__content">
      <h1 className="blue-text contacts--title">
        Консультація
      </h1>

      <p className="contacts__main-text">
        Наші фахівці надають консультацію для
        покращення вашого бізнесу та оптимізації робочіх
        процесів!
      </p>

      <div className="contacts--button">
        <Button
          content={'Замовити'}
          color={'white'}
        />
      </div>
    </div>

    <div className="contacts__photos">
        <img
          src={tedeshi}
          alt="tedeshi"
          className="contacts--image"
        />

        <Lines />
    </div>
  </div>
);
