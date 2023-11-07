import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost, filterPost, setLoading } from './actions';
import Button from '@mui/material/Button';
import styles from "./styles.module.scss";
import PostCard from '../../components/PostCard/PostCard';
import { changeUserBookmarks } from '../../App/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  // const listPosts = useSelector((state) => state.homeReducer.posts);
  const listFilteredPosts = useSelector((state) => state.homeReducer.filteredPosts);
  const isLoading = useSelector((state) => state.homeReducer.loading);
  const [searchText, setSearchText] = useState("");

  const user = useSelector((state) => state.appReducer.user);
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
    dispatch(getAllPost());
  },[])

  const handleSearch = () => {
    dispatch(setLoading(true));
    dispatch(filterPost(searchText));
    dispatch(setLoading(false));
  }

  return (
    <div className={styles.journey}>
      <h2>Journey</h2>
      <div className={styles.filter}>
        <input type="text" placeholder="Find Journey" onChange={(e) => {setSearchText(e.target.value)}} />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </div>
      <div className={styles.list_posts}>
        {isLoading ? (<p>Loading...</p>) : (
          <>
            {listFilteredPosts.map((post) => (
              <PostCard post={post} handleClickBookmark={handleClickBookmark} key={post.id} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default HomePage