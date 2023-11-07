/* eslint-disable no-case-declarations */
import { produce } from 'immer';
import { SET_ALL_POST, SET_LOADING } from './constants';

export const initialState = {
  posts: [],
  loading: true,
};

const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POST:
        draft.posts = action.posts;
        break;
      case SET_LOADING:
        draft.loading = action.value;
        console.log(action, '<<< Action loading');
        break;
    }
  })

export default bookmarkReducer;