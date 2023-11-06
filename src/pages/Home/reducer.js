/* eslint-disable no-case-declarations */
import { produce } from 'immer';
import { SET_ALL_POST, SET_NEW_POST, SET_COUNT } from './constants';

export const initialState = {
  posts: [],
  count: 0
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POST:
        draft.posts = action.posts;
        break;
      case SET_NEW_POST:
        const newPost = [...state.posts, action.post];
        draft.posts = newPost;
        break;
      case SET_COUNT:
        console.log(action, '<<< ACTIOn')
        draft.count = action.value;
        break;
    }
  })

export default homeReducer;