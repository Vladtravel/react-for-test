import LoginForm from "./components/LoginForm/LoginForm";
import s from "./App.module.css";
import Navigation from "../src/components/Navigation/Navigation";

function App() {
  return (
    <div className={s.App}>
      {/* <Navigation /> */}
      <LoginForm />
    </div>
  );
}

export default App;
