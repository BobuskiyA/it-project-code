import { AboutUsLinks } from '../../../components/AboutUsLinks';
import { NavLink } from 'react-router-dom';

import './HeaderNavigation.scss';
import classNames from 'classnames';
import { Button } from '../../../components/Button';
import { BackToUp } from '../../../components/BackToUp/BackToUp';

const getNavClass = ({ isActive }) => classNames(
  'header-navigatiion--item', {
    'header-navigatiion--item-active': isActive,
  },
);

export const HeaderNavigation = () => (
  <nav className="header-navigatiion">
    <ul className="header-navigatiion__list">
      {Object.entries(AboutUsLinks).map(([label, containerName]) => (
        <li
          key={containerName}
          className="header-navigatiion--item"
        >
          <NavLink
            to={containerName}
            className={getNavClass}
            onClick={BackToUp}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>

    <div className="header-navigatiion--button">      
      <Button
        content={'Замовити'}
      />
    </div>
  </nav>
  );
