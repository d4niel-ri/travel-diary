/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { getAllPostByAuthor } from "./actions";
import PostCard from "../../components/PostCard/PostCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { changeUserBookmarks } from "../../App/actions";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.appReducer.user);
  const listPosts = useSelector((state) => state.profileReducer.posts);
  const loading = useSelector((state) => state.profileReducer.loading);

  const handleClickBookmark = (post) => {
    let bookmarkIDs;

    if (user.bookmark_ids.includes(post.id)) {
      bookmarkIDs = user.bookmark_ids.filter((bookmarkID) => bookmarkID !== post.id);
    } else {
      bookmarkIDs = [...user.bookmark_ids, post.id];
    }

    dispatch(changeUserBookmarks(user, bookmarkIDs));
  }

  useEffect(() => {
    if (user) {
      dispatch(getAllPostByAuthor(user.id));
    } else {
      console.log("<< Navigate to home page");
      navigate("/");
    }
  }, [])

  return (
    <>
      {user && (
        <div className={styles.content}>
          <h2>Profile</h2>
          <div className={styles.profile_head}>
            <div className={styles.profile_image}>
              <img src="./Profile.png" alt={user.fullName} />
            </div>
            <div className={styles.profile_name}>{user.fullName}</div>
            <div className={styles.profile_email}>{user.email}</div>
            <Button 
              variant="contained" className={styles.btn} onClick={() => navigate("/newJourney")}
            >
              Add New Post
            </Button>
          </div>
          <div className={styles.list_posts}>
            {loading ? (<p>Loading...</p>) : (
              <>
                {listPosts.map((post) => (
                  <PostCard post={post} handleClickBookmark={handleClickBookmark} key={post.id} />
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ProfilePage;