/* eslint-disable no-case-declarations */
import { produce } from 'immer';
import { SET_LOADING } from './constants';

export const initialState = {
  loading: false
};

const newJourneyReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING:
        draft.loading = action.value;
        console.log(action, '<<< Action loading');
        break;
    }
  })

export default newJourneyReducer;