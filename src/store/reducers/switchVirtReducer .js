import { load } from 'redux-localstorage-simple';
import { SWITCH_VIRTUALIZATION } from '../actionTypes';

const DATA = load({ namespace: 'grid' });
let virtualized = DATA.switchVirtReducer;

if (!virtualized) {
  virtualized = {
    isVirt: true,
  };
}

const switchVirtReducer = (state = virtualized, action) => {
  switch (action.type) {
    case SWITCH_VIRTUALIZATION:
      return { ...state, isVirt: action.bool };
    default:
      return state;
  }
};

export default switchVirtReducer;
