import { RoundLink } from '../../../components/RoundLink';

import './ConsultationHead.scss';

export const ConsultationHead = () => (
  <div className="consultation-head">
  <div className="consultation-head--content container">
    <h1 className="consultation-head--title">
      IT DEVELOP COMMUNITY
    </h1>
    <h3 className="consultation-head--subtitle">
      Ми закриваємо всі потреби наших клієнтів 
    </h3>

    <div className="consultation-head--link">
      <RoundLink color={'white'} />
    </div>
  </div>

  <div className="consultation-head--arrow-first" />
  <div className="consultation-head--arrow-second" />

  <div className="consultation-head--robot-first" />
  <div className="consultation-head--robot-second" />
  </div>
);
