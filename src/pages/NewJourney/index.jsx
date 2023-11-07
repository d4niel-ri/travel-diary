import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import getCurrentDate from "../../utils/getCurrentDate";
import { createPost } from "./actions";
import Description from "../../components/Description/Description";

const NewJourneyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.appReducer.user);
  const [errorMsg, setErrorMsg] = useState("");
  const [inputs, setInputs] = useState(
    {title: "", imageUrl: "", shortDesc: ""}
  );
  const [description, setDescription] = useState("");

  const navigateToProfile = () => navigate("/profile");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.title || !inputs.imageUrl || !inputs.shortDesc || !description) {
      return setErrorMsg("Please fill all fields!");
    }
    console.log("<< HANDLE SUBMIT");

    const date = getCurrentDate();
    const author_id = user.id;
    const post = {...inputs, description, date, author_id};
    dispatch(createPost(post, navigateToProfile));
  }

  const handleInputChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  // useEffect(() => {
  //   if (!user) {
  //     console.log("<< Navigate to home page");
  //     navigate("/");
  //   }
  // }, [])

  return (
    <div className={styles.content}>
      <h2>New Journey</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="title">Title</label>
          <input type="title" name="title" id="title" onChange={handleInputChange} />
        </div>
        <div className={styles.input}>
          <label htmlFor="imageUrl">Image Url</label>
          <input type="url" name="imageUrl" id="imageUrl" onChange={handleInputChange} />
        </div>
        <div className={styles.input}>
          <label htmlFor="shortDesc">Short Description</label>
          <textarea name="shortDesc" id="shortDesc" rows="3" onChange={handleInputChange} />
        </div>
        <div className={styles.input}>
          <label htmlFor="description">Description</label>
          <Description description={description} setDescription={setDescription} />
        </div>

        {errorMsg && (<p className={styles.error}>{errorMsg}</p>)}

        <Button type="submit" variant='contained' className={styles.btn}>Post</Button>
      </form>
    </div>
  )
}

export default NewJourneyPage;