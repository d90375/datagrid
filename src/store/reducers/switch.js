import { SWITCH_VIRTUALIZATION } from '../actionTypes';

const switchReducer = (state = true, action) => {
  switch (action.type) {
    case SWITCH_VIRTUALIZATION:
      return action.bool;
    default:
      return state;
  }
};

export default switchReducer;
