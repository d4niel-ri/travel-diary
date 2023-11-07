/* eslint-disable no-case-declarations */
import { produce } from 'immer';
import { SET_LOADING, SET_POST } from './constants';

export const initialState = {
  post: null,
  loading: true,
};
  
const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch(action.type) {
      case SET_POST:
        draft.post = action.post;
        break;
      case SET_LOADING:
        draft.loading = action.value;
        console.log(action, '<<< Action loading');
        break;
    }
  })

export default detailReducer;