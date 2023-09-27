/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AboutUsLinks } from '../../../components/AboutUsLinks';
import { Button } from '../../../components/Button';

import './HeaderMenu.scss';

const getNavClass = ({ isActive }) => classNames(
  'header-menu__list--item', {
    'header-menu__list--item-active': isActive,
  },
);

export const HeaderMenu = () => {
  const classListBody = document.body.classList;
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsActiveMenu(true);
    classListBody.add('body-with-menu');
  };

  const handleCloseMenu = () => {
    setIsActiveMenu(false);
    classListBody.remove('body-with-menu');
  };

  return (
    <div className="header-menu">
      <button
        type="button"
        className="header-menu__open"
        onClick={handleOpenMenu}
      />

      <div className={classNames(
        'header-menu__content',
        { isActive: isActiveMenu },
      )}
      >
        <div className="header-menu__content--top container">
          <h2 className="blue-text">
            Меню
          </h2>
          <button
            type="button"
            className="header-menu__close"
            onClick={handleCloseMenu}
          />
        </div>

        <ul className="header-menu__list container">
          {Object.entries(AboutUsLinks).map(([label, containerName]) => (
              <li
                key={containerName}
              >
                <NavLink
                  to={containerName}
                  onClick={handleCloseMenu}
                  className={getNavClass}
                >
                  {label}
                </NavLink>
              </li>
            ))}
        </ul>

        <div className="header-menu--button">        
          <Button
            color={'blue'}
            content={'Замовити'}
          />
        </div>
      </div>
    </div>
  );
};
