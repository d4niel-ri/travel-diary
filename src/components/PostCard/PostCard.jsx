/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import { formatDate } from "../../utils/formatDate";
import { useDispatch, useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { changeUserBookmarks } from "../../App/actions";
import { useNavigate } from "react-router-dom";

const PostCard = ({post}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.appReducer.user);
  const dispatch = useDispatch();

  const handleClickBookmark = (post) => {
    let bookmarkIDs;

    if (user.bookmark_ids.includes(post.id)) {
      bookmarkIDs = user.bookmark_ids.filter((bookmarkID) => bookmarkID !== post.id);
    } else {
      bookmarkIDs = [...user.bookmark_ids, post.id];
    }

    console.log(bookmarkIDs, "<< bookmarkIDs after update");

    dispatch(changeUserBookmarks(user, bookmarkIDs));
  }

  return (
    <>
      {/* {!loading && ( */}
        <div className={styles.card}>
          <div className={styles.image_card}>
            {user && (
              <IconButton className={styles.btn} onClick={() => handleClickBookmark(post)}>
                {user.bookmark_ids.includes(post.id) ? 
                  (<BookmarkIcon className={styles.btn_icon} fontSize="small" />) : 
                  (<BookmarkBorderOutlinedIcon className={styles.btn_icon} fontSize="small" />)
                }
              </IconButton>
            )}
            <img src={post.imageUrl} alt={post.title} />
          </div>
          <div className={styles.card_content} onClick={() => navigate(`/detail/${post.id}`)}>
            <p className={styles.title}>{post.title}</p>
            <p className={styles.title_meta}>{formatDate(post.date)}, {post.author_name}</p>
            <p className={styles.short_desc}>{post.shortDesc}</p>
          </div>
        </div>
      {/* )} */}
    </>
  )
}

export default PostCard;