import { SET_SEARCH } from '../actionTypes';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.text;
    default:
      return state;
  }
};

export default searchReducer;
