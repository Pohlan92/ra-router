import { NavLink } from 'react-router-dom';

export const Menu = () => (
  <nav className="menu">
    <MenuLink text="Главная" to="/" exact />
    <MenuLink text="Дрифт-такси" to="/drift" />
    <MenuLink text="Time Attack" to="/timeattack" />
    <MenuLink text="Forza Karting" to="/forza" />
  </nav>
);

const MenuLink = ({ text, ...props }) => (
  <NavLink
    activeClassName="menu__item-active"
    className="menu__item"
    {...props}
  >
    {text}
  </NavLink>
);
