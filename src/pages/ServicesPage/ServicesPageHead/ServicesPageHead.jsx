import { RoundLink } from "../../../components/RoundLink";

import './ServicesPageHead.scss';

export const ServicesPageHead = () => (
  <div className="services-page-head">
    <div className="container services-page-head--content">
      <h1 className="services-page-head--title">
        Наші послуги
      </h1>

      <div className="services-page-head--link">
        <RoundLink color={'blue'} />
      </div>
    </div>
  </div>
);
