/* eslint-disable no-case-declarations */
import { produce } from 'immer';
import { SET_ALL_POST, FILTER_POST, SET_NEW_POST, SET_COUNT, SET_LOADING } from './constants';

export const initialState = {
  posts: [],
  loading: true,
  filteredPosts: [],
  count: 0
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POST:
        draft.posts = action.posts;
        draft.filteredPosts = action.posts;
        break;
      case FILTER_POST:
        draft.filteredPosts = draft.posts.filter((post) => 
          post.title.toLowerCase().includes(action.searchText.toLowerCase())
        );
        break;
      case SET_NEW_POST:
        const newPost = [...state.posts, action.post];
        draft.posts = newPost;
        draft.filteredPosts = action.posts;
        break;
      case SET_LOADING:
        draft.loading = action.value;
        console.log(action, '<<< Action loading');
        break;
      case SET_COUNT:
        console.log(action, '<<< ACTIOn')
        draft.count = action.value;
        break;
    }
  })

export default homeReducer;