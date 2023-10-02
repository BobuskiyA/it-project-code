import { Link } from 'react-router-dom';
import './Logo.scss';
import { BackToUp } from '../BackToUp/BackToUp';

export const Logo = () => (
  <div className="logo">
    <Link 
      to="/"
      replace
      className="logo--link"
      onClick={BackToUp}
    >
      IT-shared
    </Link>
  </div>
);
