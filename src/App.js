import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Container from "./components/Container/Container";
import HomeView from "./components/HomeView/HomeView";
import AppBar from "./components/AppBar/AppBar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import ConfirmView from "./components/ConfirmView/ConfirmView";
import ContactsView from "./components/ContactsView/ContactsView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import operations from "./redux/operations";
import "./App.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <PublicRoute path="/" exact component={HomeView} />

        <PrivateRoute
          path="/signup"
          component={RegisterForm}
          restricted
          redirectTo="/confirmation"
        />

        <PrivateRoute
          path="/confirmation"
          component={ConfirmView}
          redirectTo="/login"
        />

        <PublicRoute
          path="/login"
          component={LoginForm}
          restricted
          redirectTo="/contacts"
        />

        <PrivateRoute
          path="/contacts"
          component={ContactsView}
          redirectTo="/login"
        />
      </Switch>
    </Container>
  );
}

export default App;
