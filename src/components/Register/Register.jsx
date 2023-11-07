/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage, userRegister } from "../../App/actions";

const Register = ({ isOpenRegister, setIsOpenRegister }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({fullName: "", email: "", password: ""});
  const error = useSelector((state) => state.appReducer.error);

  const handleInputChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleCloseRegister = () => {
    setIsOpenRegister(false);
    dispatch(setErrorMessage(""));
    setInputs({email: "", password: ""});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return dispatch(setErrorMessage("Please fill all fields!"));
    } 

    if (inputs.password.length < 6) {
      console.log("<< SEDIKIT PASSWORD")
      return dispatch(setErrorMessage("Password minimal 6 characters!"));
    }

    dispatch(setErrorMessage(""));
    dispatch(userRegister(inputs, handleCloseRegister));
  }

  return (
    <Dialog
      open={isOpenRegister}
      onClose={handleCloseRegister}
      // aria-describedby="alert-dialog-description"
      className={styles.dialog}
    >
      <div className={styles.dialog_content}>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input type="fullName" name="fullName" id="fullName" onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleInputChange} />
          </div>

          {error && (<p className={styles.error}>{error}</p>)}

          <Button type="submit" variant='contained' className={styles.btn}>Register</Button>
          
      </form>
      </div>
    </Dialog>
  );
}

export default Register;