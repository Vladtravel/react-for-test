import { useSelector, useDispatch } from "react-redux";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";
import s from "./ContactList.module.css";
import Modal from "./Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const ContactList = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const contacts = useSelector(selectors.getContactList);

  useEffect(() => {
    if (contacts.length) return;
    dispatch(operations.fetchContacts());
  }, [contacts.length, dispatch]);

  const onContactClick = (e) => {
    console.log(e);
    // if (e.target.nodeName !== "TR") {
    //   return;
    // }

    toggleModal();
  };

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <div>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map(({ name, email, phone, id }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <IconButton
                    onClick={() => dispatch(operations.deleteContact(id))}
                    aria-label="delete"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
                <td>
                  <div onClick={onContactClick} className={s.update}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      class="NSy2Hd cdByRd RTiFqe P5kiYb"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L3 16.82V21h4.18L20.41 7.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path>
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {openModal && <Modal />}
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
