const ConfirmView = ({ email }) => {
  return (
    <h1>
      Please check your email ({email}) to confirm your account. If {email} is
      not your email address, please go back and enter the correct one. If you
      haven't received our email in 15 minutes, please check your spam folder.
      If you still haven't received it, please .
    </h1>
  );
};
export default ConfirmView;
