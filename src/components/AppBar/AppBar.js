import { useSelector } from "react-redux";
import MainNav from "../MainNav";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import selectors from "../../redux/selectors";
import "./AppBar.css";

function AppBar() {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
    <div className="AppBar">
      <MainNav />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
export default AppBar;
