import classNames from 'classnames';
import arrowWhite from '../../images/icons/pixel_arrow.svg';
import arrowBlue from '../../images/icons/pixel_arrow-blue.svg';
import './RoundLink.scss';

export const RoundLink = ({
  color
}) => (
  <div className="round-link">
    <a 
      href="/"
      className={classNames(
        'round-link--item', {
          'round-link--item-blue': color === 'blue'
        },
        {
          'round-link--item-white': color === 'white'
        },
      )}
    >
      {color === 'blue' ? (
        <img
          src={arrowWhite}
          alt="arrowWhite"
          className="round-link--arrow"
        />
        ) : (
          <img
            src={arrowBlue}
            alt="arrowBlue"
            className="round-link--arrow"
          />
      )}
    </a>
  </div>
); 
