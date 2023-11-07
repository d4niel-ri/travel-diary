/* eslint-disable no-case-declarations */
import { produce } from 'immer';
import { SET_ERROR_MESSAGE, SET_LOADING, SET_USER } from './constants';

export const initialState = {
  user: null,
  loading: true,
  error: "",
};

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ERROR_MESSAGE:
        draft.error = action.errorMessage;
        break;

      case SET_USER:
        draft.user = action.user;
        break;

      case SET_LOADING:
        draft.loading = action.value;
        break;
    }
  })

export default appReducer;