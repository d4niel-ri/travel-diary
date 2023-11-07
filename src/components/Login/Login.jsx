/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage, userLogin } from "../../App/actions";

const Login = ({ isOpenLogin, setIsOpenLogin, setIsOpenRegister }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.appReducer.error);
  const [inputs, setInputs] = useState({email: "", password: ""});

  console.log(inputs);

  const handleInputChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleCloseLogin = () => {
    setIsOpenLogin(false);
    dispatch(setErrorMessage(""));
    setInputs({email: "", password: ""});
  };

  const handleClickToRegister = () => {
    handleCloseLogin();
    setIsOpenRegister(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return dispatch(setErrorMessage("Please fill all fields!"));
    } 

    console.log("Dispatch User login");
    dispatch(userLogin(inputs, handleCloseLogin));
  }
  
  return (
    <Dialog
      open={isOpenLogin}
      onClose={handleCloseLogin}
      // aria-describedby="alert-dialog-description"
      className={styles.dialog}
    >
      <div className={styles.dialog_content}>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleInputChange} />
          </div>

          {error && (<p className={styles.error}>{error}</p>)}

          <Button type="submit" variant='contained' className={styles.btn}>Login</Button>
          
          <p>
            Don&rsquo;t have an account?? Klik {" "}
            <span className={styles.click} onClick={handleClickToRegister}>Here</span>
          </p>
      </form>
      </div>
    </Dialog>
  )
}

export default Login;