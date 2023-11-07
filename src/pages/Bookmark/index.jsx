import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPostByBookmarks } from "./actions";
import PostCard from "../../components/PostCard/PostCard";

const BookmarkPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.appReducer.user);
  const listPosts = useSelector((state) => state.bookmarkReducer.posts);
  const loading = useSelector((state) => state.bookmarkReducer.loading);

  console.log(listPosts, "<< LIST POST");
  console.log(user, "<< USER");

  useEffect(() => {
    if (user) {
      // Buatin lebih optimal   
      dispatch(getAllPostByBookmarks(user.bookmark_ids));
    } else {
      console.log("<< Navigate to home page");
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.bookmark_ids])

  return (
    <div className={styles.content}>
      <h2>Bookmark</h2>
      <div className={styles.list_posts}>
        {loading ? (<p>Loading...</p>) : (
          <>
            {listPosts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default BookmarkPage;