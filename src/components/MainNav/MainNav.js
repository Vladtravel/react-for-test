import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors from "../../redux/selectors";
import "./MainNav.css";
function MainNav() {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
    <nav className="mainNav">
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        Main
      </NavLink>
      {isAuthenticated && (
        <NavLink to="/contacts" className="link" activeClassName="activeLink">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
export default MainNav;
