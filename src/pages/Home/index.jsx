import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost, createPost } from './actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.homeReducer.posts);
  const count = useSelector((state) => state.homeReducer.count);
  console.log(listPost, '<<<< LIST POST PAGE');
  const newPost = {
    title: 'New Post',
    author: 'Dafa'
  }

  useEffect(() => {
    dispatch(getAllPost());
  },[])

  const createPostHandler = () => {
    dispatch(createPost(newPost));
  }

  return (
    <div>
      HomePage
      count : {count}
      <button onClick={() => createPostHandler()}>Add Post</button>
      {listPost?.map((item, idx) => {
        return <p key={idx}>{item.title}</p>
      })}
    </div>
  )
}

export default HomePage