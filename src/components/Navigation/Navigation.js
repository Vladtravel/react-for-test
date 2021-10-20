import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.Nav}>
      <ul>
        <li>
          <NavLink exact className={s.NavItem} activeClassName={s.NavItemActive} to="/">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink className={s.NavItem} activeClassName={s.NavItemActive} to="/portfolio">
            Портфолио
          </NavLink>
        </li>
        <li>
          <NavLink className={s.NavItem} activeClassName={s.NavItemActive} to="/contacts">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
