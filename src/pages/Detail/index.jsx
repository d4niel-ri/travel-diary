import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { getPostByID } from "./actions";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

const DetailPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.detailReducer.post);
  const loading = useSelector((state) => state.detailReducer.loading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostByID(id));
  }, [])

  return (
    <div className={styles.content}>
      {loading ? (<p>Loading...</p>) : (
        <>
          {post && (
            <>
              <header>
                <div className={styles.header_left}>
                  <div className={styles.title}>{post?.title}</div>
                  <div className={styles.date}>{formatDate(post?.date)}</div>
                </div>
                <div className={styles.author}>{post?.author_name}</div>
              </header>
              <div className={styles.image}>
                <img src={post?.imageUrl} alt={post?.title} />
              </div>
              <div className={styles.text}>
                <div dangerouslySetInnerHTML={{ __html: post?.description }} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default DetailPage;