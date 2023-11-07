import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPostByBookmarks, setAllPost } from "./actions";
import PostCard from "../../components/PostCard/PostCard";
import { changeUserBookmarks } from "../../App/actions";

const BookmarkPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.appReducer.user);
  const listPosts = useSelector((state) => state.bookmarkReducer.posts);
  const loading = useSelector((state) => state.bookmarkReducer.loading);

  const handleClickBookmark = (post) => {
    const bookmarkIDs = user.bookmark_ids.filter((bookmarkID) => bookmarkID !== post.id);
    const newListPosts = listPosts.filter((item) => item.id !== post.id);

    dispatch(changeUserBookmarks(user, bookmarkIDs));
    dispatch(setAllPost(newListPosts));
  }

  useEffect(() => {
    if (user) {
      // Buatin lebih optimal   
      dispatch(getAllPostByBookmarks(user.bookmark_ids));
    } else {
      console.log("<< Navigate to home page");
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.content}>
      <h2>Bookmark</h2>
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
  )
}

export default BookmarkPage;