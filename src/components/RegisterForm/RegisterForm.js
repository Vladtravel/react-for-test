import { useHistory, NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../../redux/operations";
import s from "./RegisterForm.module.css";

function RegisterForm() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "password":
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Fill all fields!");
      return;
    }
    dispatch(operations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    history.push("/confirmation");
  };

  return (
    <>
      <div className={s.frontPage}>
        <div className={s.loginForm}>
          <div className={s.loginForm__header}>
            <h1 className={s.loginForm__title}>Registration</h1>
          </div>
          <div className={s.loginFormBody}>
            <form onSubmit={handleSubmit}>
              <div className={s.NameForm}>
                <label className={s.loginFormBody__label}>
                  Name
                  <div className={s.inputIconName}></div>
                  <input
                    className={s.loginFormBody__input}
                    type="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className={s.EmailForm}>
                <label className={s.loginFormBody__label}>
                  Email address
                  <div className={s.inputIconEmail}></div>
                  <input
                    className={s.loginFormBody__input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className={s.PasswordForm}>
                <label className={s.loginFormBody__label}>
                  Password
                  <div className={s.inputIconPassword}></div>
                  <input
                    className={s.loginFormBody__input}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <button className={s.loginFormBody__button} type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <NavLink to="/login" className={s.loginFormFooter}>
            Return to Log In
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default RegisterForm;
