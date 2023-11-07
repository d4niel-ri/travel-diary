/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import styles from "./styles.module.scss";

const Register = ({ isOpenRegister, setIsOpenRegister }) => {
  const [inputs, setInputs] = useState({fullName: "", email: "", password: ""});

  const handleInputChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleCloseRegister = () => {
    setIsOpenRegister(false);
    setInputs({email: "", password: ""});
  };

  return (
    <Dialog
      open={isOpenRegister}
      onClose={handleCloseRegister}
      // aria-describedby="alert-dialog-description"
      className={styles.dialog}
    >
      <div className={styles.dialog_content}>
        <h1>Register</h1>

        <form>
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
            <input type="password" name="password" id="password" />
          </div>

          <Button type="submit" variant='contained' className={styles.btn}>Register</Button>
          
      </form>
      </div>
    </Dialog>
  );
}

export default Register;