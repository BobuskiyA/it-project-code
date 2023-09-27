import classNames from 'classnames';
import "./Button.scss";

export const Button = ({ content, color }) => {
  const buttonClasses = classNames('button', {
    'button--white': color === 'white',
    'button--blue': color === 'blue',
  });

  return (
    <button className={buttonClasses}>
      {content}
    </button>
  );
};