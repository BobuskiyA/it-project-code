import { Logo } from "../../components/Logo";
import { HeaderNavigation } from "./HeaderNavigation";

import './Header.scss';
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

export const Header = () => (
  <header className="header">
    <Logo />

    <HeaderNavigation />

    <div className="header--menu">
      <HeaderMenu />
    </div>
  </header>
);
