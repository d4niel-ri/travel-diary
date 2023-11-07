/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import { formatDate } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useNavigate } from "react-router-dom";

const PostCard = ({post, handleClickBookmark}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.appReducer.user);
  return (
    <>
      {/* {!loading && ( */}
        <div className={styles.card} onClick={() => navigate(`/detail/${post.id}`)}>
          <div className={styles.image_card}>
            {user && (
              <IconButton className={styles.btn} 
                onClick={(e) => {e.stopPropagation(); handleClickBookmark(post)}}
              >
                {user.bookmark_ids.includes(post.id) ? 
                  (<BookmarkIcon className={styles.btn_icon} fontSize="small" />) : 
                  (<BookmarkBorderOutlinedIcon className={styles.btn_icon} fontSize="small" />)
                }
              </IconButton>
            )}
            <img src={post.imageUrl} alt={post.title} />
          </div>
          <div className={styles.card_content}>
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