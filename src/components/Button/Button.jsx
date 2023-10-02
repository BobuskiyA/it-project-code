import classNames from 'classnames';
import "./Button.scss";
import { Link } from 'react-router-dom';
import { BackToUp } from '../BackToUp/BackToUp';

export const Button = ({ 
  content, 
  color = 'blue',
  to = '/form',
  ...restProps
}) => {
  const buttonClasses = classNames('button', {
    'button--white': color === 'white',
    'button--blue': color === 'blue',
    'button--blue-secondary': color === 'blue-secondary',
    'button--transparent': color === 'transparent',
  });

  return (
    <Link 
      className={buttonClasses}
      to={to}
      onClick={BackToUp}
      {...restProps}
    >
      {content}
    </Link>
  );
};
