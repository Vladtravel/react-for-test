import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";
import "./ContactForm.css";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    marginBottom: "15px",
  },
});

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const contacts = useSelector((state) => selectors.getContactsItems(state));

  const isContsctExist = () => {
    const normalizedFilter = name.toLowerCase();
    return contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedFilter
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      alert("Fill all fields!");
      return;
    }
    const existContact = isContsctExist();
    if (existContact) {
      alert(`${existContact.name} is already in contacts.`);
      return;
    }
    dispatch(operations.addContact({ name, email, phone }));
    setName("");
    setEmail("");
    setPhone("");
  };

  const classes = useStyles();

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        className={classes.textField}
        size="small"
        label="Name"
        variant="outlined"
      />

      <TextField
        type="text"
        name="email"
        value={email}
        onChange={handleInputChange}
        className={classes.textField}
        size="small"
        label="Email"
        variant="outlined"
      />

      <TextField
        type="text"
        name="phone"
        value={phone}
        onChange={handleInputChange}
        className={classes.textField}
        size="small"
        label="Phone"
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        add contact
      </Button>
    </form>
  );
}

export default ContactForm;
