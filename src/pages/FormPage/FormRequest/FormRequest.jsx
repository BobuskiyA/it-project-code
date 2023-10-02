import { Button } from "../../../components/Button";

import './FormRequest.scss';

export const FormRequest = () => (
  <div className="form-request">
    <div className="form-request__content container">
      <h1 className="form-request--title">
        ЗАПИТ ВІДПРАВЛЕНИЙ
      </h1>
      <h4 className="form-request--subtitle">
        Наша команда зв’яжеться з вами протягом 24 годин
      </h4>

      <div className="form-request--button">
        <Button 
          content={'На головну сторінку'}
          color="transparent"
          to="/"
        />
      </div>
    </div>
  </div>
);
