import { NavLink } from "react-router-dom";
import "./AuthNav.css";
function AuthNav() {
  return (
    <div className="authNav">
      <NavLink to="/register" className="link" activeClassName="activeLink">
        Register
      </NavLink>
      <NavLink to="/login" className="link" activeClassName="activeLink">
        Log In
      </NavLink>
    </div>
  );
}
export default AuthNav;
