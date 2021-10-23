import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../../redux/operations";
import s from "./RegisterForm.module.css";

// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   textField: {
//     marginBottom: "15px",
//   },
//   button: {
//     display: "block",
//     letterSpacing: "1px",
//   },
// });

function RegisterForm() {
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
  };

  // const classes = useStyles();

  return (
    <>
      {/* <h1 className="regTitle">Register Page </h1>

      <form onSubmit={handleSubmit} className="regForm" autoComplete="off">
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={classes.textField}
          size="small"
          label="Name"
          variant="outlined"
        />

        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={classes.textField}
          size="small"
          label="E-mail"
          variant="outlined"
        />
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={classes.textField}
          size="small"
          label="Password"
          variant="outlined"
        />
        <Button className={classes.button} size="small" variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form> */}

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
                Sign In
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
