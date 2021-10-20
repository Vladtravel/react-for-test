import { useState } from "react";
// import { useDispatch } from "react-redux";
// import operations from "../../redux/operations";
import s from "./LoginForm.module.css";

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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
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
    if (email.trim() === "" || password.trim() === "") {
      alert("Fill all fields!");
      return;
    }
    //   dispatch(operations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  // const classes = useStyles();

  return (
    <>
      <div className={s.loginForm}>
        <div className={s.loginForm__header}>
          <h1 className={s.loginForm__title}>Login in to your account</h1>
        </div>
        <div className={s.loginFormBody}>
          <form onSubmit={handleSubmit}>
            <label className={s.loginFormBody__label}>
              Email address
              <input
                className={s.loginFormBody__input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label className={s.loginFormBody__label}>
              Password
              <input
                className={s.loginFormBody__input}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <button className={s.loginFormBody__button} type="submit">
              Sign In
            </button>
          </form>
        </div>
        <a className={s.loginFormFooter} href="">
          Create an account
        </a>
      </div>
      {/* <form onSubmit={handleSubmit} className={s.logForm} autoComplete="off">
        <h1 className={s.logTitle}>Рабочий стол</h1>
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
          Вход
        </Button>
      </form> */}
    </>
  );
}
export default LoginForm;
